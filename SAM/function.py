import json
import boto3
  # On invoking this function-retrive visitor count, add one, store  in database, return to client
  def handler(event, context):
      visits=0
      dynamodb = boto3.client('dynamodb')
      # Get Visits
      response = dynamodb.get_item(TableName="${DynamodbTableName}", Key={'Site': {'N': '0'}})
      if "Item" not in  response:
        dynamodb.put_item(TableName="${DynamodbTableName}", Item={'Site': {'N': '0'},'Visits': {'N': '1'}})
      else:
        visits = int(response["Item"]["Visits"]["N"]) + 1
        # Store Visits
        dynamodb.put_item(TableName="${DynamodbTableName}", Item={'Site': {'N': '0'},'Visits': {'N': str(visits)}})
      return visits