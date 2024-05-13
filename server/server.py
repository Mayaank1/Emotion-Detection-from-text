from flask import *
from flask import Flask,jsonify
from joblib import Parallel, delayed
import joblib
import numpy as np
import pandas as pd
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import re
from nltk.stem.lancaster import LancasterStemmer
from keras.preprocessing.text import Tokenizer
from flask_cors import CORS
from keras.models import Sequential, load_model
import numpy as np

from keras.preprocessing.sequence import pad_sequences
app = Flask(__name__)

CORS(app,origins=["http://localhost:3000"], supports_credentials=True)
@app.route('/api/home', methods=['GET'])
def hello_world():
    return jsonify({
        'message':"Hello, World!"})

@app.route('/api/res',methods=['POST','GET'])
def get_result():
    text = request.get_json()
    text=list(text.values())
    text = ' '.join(text)
    print(text)
    cleaned_words = cleaning(text)
    word_tokenizer = create_tokenizer(cleaned_words)
    vocab_size = len(word_tokenizer.word_index) + 1
    max_length = 179
    res=get_emotion(text,word_tokenizer)
    
    return jsonify({
        'message':res})
    


stemmer = LancasterStemmer()
def cleaning(sentences):
  words = []
  for s in sentences:
    clean = re.sub(r'[^ a-z A-Z 0-9]', " ", s)
    w = word_tokenize(clean)
    words.append([i.lower() for i in w])
    
  return words 



def create_tokenizer(words, filters = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'):
  token = Tokenizer(filters = filters)
  token.fit_on_texts(words)
  return token




def encoding_doc(token, words):
  return(token.texts_to_sequences(words))


def padding_doc(encoded_doc, max_length):
  return(pad_sequences(encoded_doc, maxlen = 179, padding = "post"))






model = load_model("model_lstm.h5")
def predictions(text,word_tokenizer):
  print("hi")
  print(text)
  clean = re.sub(r'[^ a-z A-Z 0-9]', " ", text)
  print(clean)
  test_word = word_tokenize(clean)
  print("g2et")
  test_word = [w.lower() for w in test_word]
  test_ls = word_tokenizer.texts_to_sequences(test_word)

  if [] in test_ls:
    test_ls = list(filter(None, test_ls))
    
  test_ls = np.array(test_ls).reshape(1, len(test_ls))
  x = padding_doc(test_ls,179)

  pred = model.predict(x)
  
  return pred

def get_final_output(pred, classes):
  predictions = pred[0]
  classes = np.array(classes)
  ids = np.argsort(-predictions)
  classes = classes[ids]
  predictions = -np.sort(-predictions)
 
  for i in range(pred.shape[1]):
    print("%s has confidence = %s" % (classes[i], (predictions[i])))
  
  return classes[0]

def get_emotion(text,word_tokenizer):
    classes=['sadness', 'guilt', 'disgust', 'fear', 'anger', 'joy', 'shame']
    print("get")
    print(word_tokenizer)
    pred = predictions(text,word_tokenizer)
    print("get1")
    result = get_final_output(pred, classes)
    print('\nans: {}\n'.format(result))
    return result
if __name__ == '__main__':
    app.run(debug=True,port=8080)
    stemmer = LancasterStemmer()

