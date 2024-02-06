## Microsoft.Scheduler/jobCollections@2016-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Scheduler/jobCollections@2016-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      quota = {
        maxJobCount = int
        maxJobOccurrence = int
        maxRecurrence = {
          frequency = "string"
          interval = int
        }
      }
      sku = {
        name = "string"
      }
      state = "string"
    }
  })
}

```

## Microsoft.Scheduler/jobCollections/jobs@2016-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Scheduler/jobCollections/jobs@2016-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      action = {
        errorAction = {
          queueMessage = {
            message = "string"
            queueName = "string"
            sasToken = "string"
            storageAccount = "string"
          }
          request = {
            authentication = {
              type = "string"
              // For remaining properties, see HttpAuthentication objects
            }
            body = "string"
            headers = {}
            method = "string"
            uri = "string"
          }
          retryPolicy = {
            retryCount = int
            retryInterval = "string"
            retryType = "string"
          }
          serviceBusQueueMessage = {
            authentication = {
              sasKey = "string"
              sasKeyName = "string"
              type = "string"
            }
            brokeredMessageProperties = {
              contentType = "string"
              correlationId = "string"
              forcePersistence = bool
              label = "string"
              messageId = "string"
              partitionKey = "string"
              replyTo = "string"
              replyToSessionId = "string"
              scheduledEnqueueTimeUtc = "string"
              sessionId = "string"
              timeToLive = "string"
              to = "string"
              viaPartitionKey = "string"
            }
            customMessageProperties = {}
            message = "string"
            namespace = "string"
            queueName = "string"
            transportType = "string"
          }
          serviceBusTopicMessage = {
            authentication = {
              sasKey = "string"
              sasKeyName = "string"
              type = "string"
            }
            brokeredMessageProperties = {
              contentType = "string"
              correlationId = "string"
              forcePersistence = bool
              label = "string"
              messageId = "string"
              partitionKey = "string"
              replyTo = "string"
              replyToSessionId = "string"
              scheduledEnqueueTimeUtc = "string"
              sessionId = "string"
              timeToLive = "string"
              to = "string"
              viaPartitionKey = "string"
            }
            customMessageProperties = {}
            message = "string"
            namespace = "string"
            topicPath = "string"
            transportType = "string"
          }
          type = "string"
        }
        queueMessage = {
          message = "string"
          queueName = "string"
          sasToken = "string"
          storageAccount = "string"
        }
        request = {
          authentication = {
            type = "string"
            // For remaining properties, see HttpAuthentication objects
          }
          body = "string"
          headers = {}
          method = "string"
          uri = "string"
        }
        retryPolicy = {
          retryCount = int
          retryInterval = "string"
          retryType = "string"
        }
        serviceBusQueueMessage = {
          authentication = {
            sasKey = "string"
            sasKeyName = "string"
            type = "string"
          }
          brokeredMessageProperties = {
            contentType = "string"
            correlationId = "string"
            forcePersistence = bool
            label = "string"
            messageId = "string"
            partitionKey = "string"
            replyTo = "string"
            replyToSessionId = "string"
            scheduledEnqueueTimeUtc = "string"
            sessionId = "string"
            timeToLive = "string"
            to = "string"
            viaPartitionKey = "string"
          }
          customMessageProperties = {}
          message = "string"
          namespace = "string"
          queueName = "string"
          transportType = "string"
        }
        serviceBusTopicMessage = {
          authentication = {
            sasKey = "string"
            sasKeyName = "string"
            type = "string"
          }
          brokeredMessageProperties = {
            contentType = "string"
            correlationId = "string"
            forcePersistence = bool
            label = "string"
            messageId = "string"
            partitionKey = "string"
            replyTo = "string"
            replyToSessionId = "string"
            scheduledEnqueueTimeUtc = "string"
            sessionId = "string"
            timeToLive = "string"
            to = "string"
            viaPartitionKey = "string"
          }
          customMessageProperties = {}
          message = "string"
          namespace = "string"
          topicPath = "string"
          transportType = "string"
        }
        type = "string"
      }
      recurrence = {
        count = int
        endTime = "string"
        frequency = "string"
        interval = int
        schedule = {
          hours = [
            int
          ]
          minutes = [
            int
          ]
          monthDays = [
            int
          ]
          monthlyOccurrences = [
            {
              day = "string"
              Occurrence = int
            }
          ]
          weekDays = [
            "string"
          ]
        }
      }
      startTime = "string"
      state = "string"
    }
  })
}

```

