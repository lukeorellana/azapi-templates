import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface LogicIntegrationaccountsMapsProps extends IAzAPIBaseProps {

}

export class LogicIntegrationaccountsMaps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsMapsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/maps@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsMapsProps): string {
    return JSON.stringify(
      {properties: {content: "string", contentType: "string", mapType: "string", parametersSchema: {ref: "string"}}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
// | location | The resource location. | string |
// | tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
// | properties | The integration account map properties. | IntegrationAccountMapProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | content | The content. | string |
// | contentType | The content type. | string |
// | mapType | The map type. | 'Liquid''NotSpecified''Xslt''Xslt20''Xslt30' (required) |
// | metadata | The metadata. | For Bicep, you can use theany()function. |
// | parametersSchema | The parameters schema of integration account map. | IntegrationAccountMapPropertiesParametersSchema |

// | Name | Description | Value |
// |-|-|-|
// | ref | The reference name. | string |
