import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface OperationalinsightsWorkspacesSavedsearchesProps extends IAzAPIBaseProps {

}

export class OperationalinsightsWorkspacesSavedsearches extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsWorkspacesSavedsearchesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/workspaces/savedSearches@2020-08-01";
  }

  protected getResourceBody(props: OperationalinsightsWorkspacesSavedsearchesProps): string {
    return JSON.stringify(
      {properties: {category: "string", displayName: "string", functionAlias: "string", functionParameters: "string", query: "string", tags: [{name: "string", value: "string"}], version: int}, etag: "string"}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
// | etag | The ETag of the saved search. To override an existing saved search, use "*" or specify the current Etag | string |
// | properties | The properties of the saved search. | SavedSearchProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | category | The category of the saved search. This helps the user to find a saved search faster. | string (required) |
// | displayName | Saved search display name. | string (required) |
// | functionAlias | The function alias if query serves as a function. | string |
// | functionParameters | The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to /azure/kusto/query/functions/user-defined-functions. | string |
// | query | The query expression for the saved search. | string (required) |
// | tags | The tags attached to the saved search. | object |
// | version | The version number of the query language. The current version is 2 and is the default. | int |
