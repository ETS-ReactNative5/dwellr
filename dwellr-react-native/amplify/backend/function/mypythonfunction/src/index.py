import json

# def handler(event, context):
#   print('received event:')
#   print(event)
#   return {
#       'statusCode': 200,
#       'headers': {
#           'Access-Control-Allow-Headers': '*',
#           'Access-Control-Allow-Origin': '*',
#           'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
#       },
#       'body': "Hello from your new Amplify Python lambda!"
#   }

def handler(event, context):
    body = {
        "message": "Hello Jason!"
    }
    
    response ={
        "statusCode": 200,
        "body": json.dumps(body),
        "headers":{
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
        }
    }

    return response