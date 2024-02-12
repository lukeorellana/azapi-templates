import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DocumentdbMongoclustersProps extends IAzAPIBaseProps {

}

/**
 * DocumentdbMongoclusters resource
 */
export class DocumentdbMongoclusters extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DocumentdbMongoclustersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DocumentDB/mongoClusters@2023-03-01-preview";
  }

  protected getResourceBody(props: DocumentdbMongoclustersProps): string {
    return JSON.stringify(
        {properties: {administratorLogin: "string", administratorLoginPassword: "string", createMode: "string", nodeGroupSpecs: [{diskSizeGB: "${int}", enableHa: "${bool}", kind: "Shard", nodeCount: "${int}", sku: "string"}], restoreParameters: {pointInTimeUTC: "string", sourceResourceId: "string"}, serverVersion: "string"}}
    );
  }
}
