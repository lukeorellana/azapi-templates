import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridcomputeMachinesProps extends IAzAPIBaseProps {

}

/**
 * HybridcomputeMachines resource
 */
export class HybridcomputeMachines extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridcomputeMachinesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridCompute/machines@2022-11-10";
  }

  protected getResourceBody(props: HybridcomputeMachinesProps): string {
    return JSON.stringify(
        {properties: {clientPublicKey: "string", cloudMetadata: {}, extensions: [{name: "string", status: {code: "string", displayStatus: "string", level: "string", message: "string", time: "string"}, type: "string", typeHandlerVersion: "string"}], locationData: {city: "string", countryOrRegion: "string", district: "string", name: "string"}, mssqlDiscovered: "string", osProfile: {linuxConfiguration: {patchSettings: {assessmentMode: "string", patchMode: "string"}}, windowsConfiguration: {patchSettings: {assessmentMode: "string", patchMode: "string"}}}, osType: "string", parentClusterResourceId: "string", privateLinkScopeResourceId: "string", serviceStatuses: {extensionService: {startupType: "string", status: "string"}, guestConfigurationService: {startupType: "string", status: "string"}}, vmId: "string"}}
    );
  }
}
