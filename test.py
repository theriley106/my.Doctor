import requests

def send_notication(message):
	res = requests.post("http://127.0.0.1:5000/notification?message=Test&patient=213")

if __name__ == '__main__':
	send_notication("TESTING")
