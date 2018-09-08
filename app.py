from flask import Flask, render_template, request, url_for, redirect, Markup, jsonify, make_response, send_from_directory, session

app = Flask(__name__, static_url_path='/static')

SECRETS = open("secrets.txt").read().split("\n")
APP_ID = SECRETS[0]
APP_CODE = SECRETS[1]

@app.route('/', methods=['GET'])
def index():
	return render_template("index.html", appid=APP_ID, appcode=APP_CODE)

if __name__ == '__main__':
	app.run(host='127.0.0.1', port=5000)
