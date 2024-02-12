import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabLabs resource
 */
export class DevtestlabLabs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsProps): string {
    return JSON.stringify(
        {properties: {announcement: {enabled: "string", expirationDate: "string", expired: "${bool}", markdown: "string", title: "string"}, environmentPermission: "string", extendedProperties: {}, labStorageType: "string", mandatoryArtifactsResourceIdsLinux: ["string"], mandatoryArtifactsResourceIdsWindows: ["string"], premiumDataDisks: "string", support: {enabled: "string", markdown: "string"}}}
    );
  }
}
