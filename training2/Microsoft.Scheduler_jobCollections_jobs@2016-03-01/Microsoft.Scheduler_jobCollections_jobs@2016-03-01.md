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

### jobCollections/jobs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:jobCollections |
| properties | Gets or sets the job properties. | JobProperties |


### JobProperties

| Name | Description | Value |
|-|-|-|
| action | Gets or sets the job action. | JobAction |
| recurrence | Gets or sets the job recurrence. | JobRecurrence |
| startTime | Gets or sets the job start time. | string |
| state | Gets or set the job state. | 'Completed''Disabled''Enabled''Faulted' |


### JobAction

| Name | Description | Value |
|-|-|-|
| errorAction | Gets or sets the error action. | JobErrorAction |
| queueMessage | Gets or sets the storage queue message. | StorageQueueMessage |
| request | Gets or sets the http requests. | HttpRequest |
| retryPolicy | Gets or sets the retry policy. | RetryPolicy |
| serviceBusQueueMessage | Gets or sets the service bus queue message. | ServiceBusQueueMessage |
| serviceBusTopicMessage | Gets or sets the service bus topic message. | ServiceBusTopicMessage |
| type | Gets or sets the job action type. | 'Http''Https''ServiceBusQueue''ServiceBusTopic''StorageQueue' |


### JobErrorAction

| Name | Description | Value |
|-|-|-|
| queueMessage | Gets or sets the storage queue message. | StorageQueueMessage |
| request | Gets or sets the http requests. | HttpRequest |
| retryPolicy | Gets or sets the retry policy. | RetryPolicy |
| serviceBusQueueMessage | Gets or sets the service bus queue message. | ServiceBusQueueMessage |
| serviceBusTopicMessage | Gets or sets the service bus topic message. | ServiceBusTopicMessage |
| type | Gets or sets the job error action type. | 'Http''Https''ServiceBusQueue''ServiceBusTopic''StorageQueue' |


### StorageQueueMessage

| Name | Description | Value |
|-|-|-|
| message | Gets or sets the message. | string |
| queueName | Gets or sets the queue name. | string |
| sasToken | Gets or sets the SAS key. | string |
| storageAccount | Gets or sets the storage account name. | string |


### HttpRequest

| Name | Description | Value |
|-|-|-|
| authentication | Gets or sets the authentication method of the request. | HttpAuthentication |
| body | Gets or sets the request body. | string |
| headers | Gets or sets the headers. | object |
| method | Gets or sets the method of the request. | string |
| uri | Gets or sets the URI of the request. | string |


### HttpAuthentication

| Name | Description | Value |
|-|-|-|
| type | Set the object type | ActiveDirectoryOAuthBasicClientCertificate(required) |


### OAuthAuthentication

| Name | Description | Value |
|-|-|-|
| type | Gets or sets the HTTP authentication type. | 'ActiveDirectoryOAuth' (required) |
| audience | Gets or sets the audience. | string |
| clientId | Gets or sets the client identifier. | string |
| secret | Gets or sets the secret, return value will always be empty. | string |
| tenant | Gets or sets the tenant. | string |


### BasicAuthentication

| Name | Description | Value |
|-|-|-|
| type | Gets or sets the HTTP authentication type. | 'Basic' (required) |
| password | Gets or sets the password, return value will always be empty. | string |
| username | Gets or sets the username. | string |


### ClientCertAuthentication

| Name | Description | Value |
|-|-|-|
| type | Gets or sets the HTTP authentication type. | 'ClientCertificate' (required) |
| certificateExpirationDate | Gets or sets the certificate expiration date. | string |
| certificateSubjectName | Gets or sets the certificate subject name. | string |
| certificateThumbprint | Gets or sets the certificate thumbprint. | string |
| password | Gets or sets the certificate password, return value will always be empty. | string |
| pfx | Gets or sets the pfx certificate. Accepts certification in base64 encoding, return value will always be empty. | string |


### RetryPolicy

| Name | Description | Value |
|-|-|-|
| retryCount | Gets or sets the number of times a retry should be attempted. | int |
| retryInterval | Gets or sets the retry interval between retries, specify duration in ISO 8601 format. | string |
| retryType | Gets or sets the retry strategy to be used. | 'Fixed''None' |


### ServiceBusQueueMessage

| Name | Description | Value |
|-|-|-|
| authentication | Gets or sets the Service Bus authentication. | ServiceBusAuthentication |
| brokeredMessageProperties | Gets or sets the brokered message properties. | ServiceBusBrokeredMessageProperties |
| customMessageProperties | Gets or sets the custom message properties. | object |
| message | Gets or sets the message. | string |
| namespace | Gets or sets the namespace. | string |
| queueName | Gets or sets the queue name. | string |
| transportType | Gets or sets the transport type. | 'AMQP''NetMessaging''NotSpecified' |


### ServiceBusAuthentication

| Name | Description | Value |
|-|-|-|
| sasKey | Gets or sets the SAS key. | string |
| sasKeyName | Gets or sets the SAS key name. | string |
| type | Gets or sets the authentication type. | 'NotSpecified''SharedAccessKey' |


### ServiceBusBrokeredMessageProperties

| Name | Description | Value |
|-|-|-|
| contentType | Gets or sets the content type. | string |
| correlationId | Gets or sets the correlation ID. | string |
| forcePersistence | Gets or sets the force persistence. | bool |
| label | Gets or sets the label. | string |
| messageId | Gets or sets the message ID. | string |
| partitionKey | Gets or sets the partition key. | string |
| replyTo | Gets or sets the reply to. | string |
| replyToSessionId | Gets or sets the reply to session ID. | string |
| scheduledEnqueueTimeUtc | Gets or sets the scheduled enqueue time UTC. | string |
| sessionId | Gets or sets the session ID. | string |
| timeToLive | Gets or sets the time to live. | string |
| to | Gets or sets the to. | string |
| viaPartitionKey | Gets or sets the via partition key. | string |


### ServiceBusTopicMessage

| Name | Description | Value |
|-|-|-|
| authentication | Gets or sets the Service Bus authentication. | ServiceBusAuthentication |
| brokeredMessageProperties | Gets or sets the brokered message properties. | ServiceBusBrokeredMessageProperties |
| customMessageProperties | Gets or sets the custom message properties. | object |
| message | Gets or sets the message. | string |
| namespace | Gets or sets the namespace. | string |
| topicPath | Gets or sets the topic path. | string |
| transportType | Gets or sets the transport type. | 'AMQP''NetMessaging''NotSpecified' |


### JobRecurrence

| Name | Description | Value |
|-|-|-|
| count | Gets or sets the maximum number of times that the job should run. | int |
| endTime | Gets or sets the time at which the job will complete. | string |
| frequency | Gets or sets the frequency of recurrence (second, minute, hour, day, week, month). | 'Day''Hour''Minute''Month''Week' |
| interval | Gets or sets the interval between retries. | int |
| schedule |  | JobRecurrenceSchedule |


### JobRecurrenceSchedule

| Name | Description | Value |
|-|-|-|
| hours | Gets or sets the hours of the day that the job should execute at. | int[] |
| minutes | Gets or sets the minutes of the hour that the job should execute at. | int[] |
| monthDays | Gets or sets the days of the month that the job should execute on. Must be between 1 and 31. | int[] |
| monthlyOccurrences | Gets or sets the occurrences of days within a month. | JobRecurrenceScheduleMonthlyOccurrence[] |
| weekDays | Gets or sets the days of the week that the job should execute on. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |


### JobRecurrenceScheduleMonthlyOccurrence

| Name | Description | Value |
|-|-|-|
| day | Gets or sets the day. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| Occurrence | Gets or sets the occurrence. Must be between -5 and 5. | int |


