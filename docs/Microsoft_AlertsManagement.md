## Microsoft.AlertsManagement/actionRules@2021-08-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AlertsManagement/actionRules@2021-08-08"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      actions = [
        {
          actionType = "string"
          // For remaining properties, see Action objects
        }
      ]
      conditions = [
        {
          field = "string"
          operator = "string"
          values = [
            "string"
          ]
        }
      ]
      description = "string"
      enabled = bool
      schedule = {
        effectiveFrom = "string"
        effectiveUntil = "string"
        recurrences = [
          {
            endTime = "string"
            startTime = "string"
            recurrenceType = "string"
            // For remaining properties, see Recurrence objects
          }
        ]
        timeZone = "string"
      }
      scopes = [
        "string"
      ]
    }
  })
}

```

## Microsoft.AlertsManagement/prometheusRuleGroups@2021-07-22-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AlertsManagement/prometheusRuleGroups@2021-07-22-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      clusterName = "string"
      description = "string"
      enabled = bool
      interval = "string"
      rules = [
        {
          actions = [
            {
              actionGroupId = "string"
              actionProperties = {}
            }
          ]
          alert = "string"
          annotations = {}
          enabled = bool
          expression = "string"
          for = "string"
          labels = {}
          record = "string"
          resolveConfiguration = {
            autoResolved = bool
            timeToResolve = "string"
          }
          severity = int
        }
      ]
      scopes = [
        "string"
      ]
    }
  })
}

```

