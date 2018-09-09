import requests
import random

def returnSpeech(speech, endSession=True, text="", title=""):
	return {
		"version": "1.0",
		"sessionAttributes": {},
		"response": {
		"outputSpeech": {
		"type": "PlainText",
		"text": speech
			},
			"shouldEndSession": endSession
		  }
		}

def lambda_handler(event, context):
	if event["request"]["type"] == "LaunchRequest":
		requests.post("https://my-doctor-alexa.herokuapp.com/notification?message=Test&patient=213")
		returnSpeech('Thank you for checking out my doctor.  An alexa skill created at The Johns Hopkins University')
		return returnSpeech('I dont know l oh l.  Why would i know that.  I am not a doctor.  ')

if __name__ == '__main__':
	pass
