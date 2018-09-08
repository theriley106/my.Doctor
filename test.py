import requests

def send_notication(message):
	res = requests.post("https://my-doctor-alexa.herokuapp.com/notification?message=Test&patient=213")

if __name__ == '__main__':
	send_notication("TESTING")
