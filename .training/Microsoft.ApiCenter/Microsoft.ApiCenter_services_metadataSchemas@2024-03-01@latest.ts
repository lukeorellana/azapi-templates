import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApicenterServicesMetadataschemasProps extends IAzAPIBaseProps {

}

/**
 * ApicenterServicesMetadataschemas resource
 */
export class ApicenterServicesMetadataschemas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApicenterServicesMetadataschemasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiCenter/services/metadataSchemas@2024-03-01";
  }

  protected getResourceBody(props: ApicenterServicesMetadataschemasProps): string {
    return JSON.stringify(
        {properties: {assignedTo: [{deprecated: "${bool}", entity: "string", required: "${bool}"}], schema: "string"}}
    );
  }
}
