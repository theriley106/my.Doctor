from flask import Flask, render_template, request, url_for, redirect, Markup, jsonify, make_response, send_from_directory, session

app = Flask(__name__, static_url_path='/static')


INFO = {}
INFO['status'] = False
INFO['message'] = None

def get_message():
	a = INFO['message']
	INFO['message'] = None
	INFO['status'] = False
	return a

def update_status(message):
	INFO['message'] = message
	INFO['status'] = True

@app.route('/', methods=['GET'])
def index():
	return render_template("index.html")

@app.route('/notification', methods=['GET', 'POST'])
def check_notifications():
	if request.method == 'POST':
		# It's a post request
		message = request.values.get("message")
		patient = request.values.get("patient")
		update_status(message)
		return "None"
	else:
		# It's a get request
		if INFO['status'] == True:
			# This means there is a new update
			return get_message()
		else:
			# This means there is not an update
			return "None"


if __name__ == '__main__':
	app.run(host='0.0.0.0', port=5000, debug=True, threaded=True)
