import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface VirtualmachineimagesImagetemplatesProps extends IAzAPIBaseProps {

}

/**
 * VirtualmachineimagesImagetemplates resource
 */
export class VirtualmachineimagesImagetemplates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: VirtualmachineimagesImagetemplatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.VirtualMachineImages/imageTemplates@2022-02-14";
  }

  protected getResourceBody(props: VirtualmachineimagesImagetemplatesProps): string {
    return JSON.stringify(
        {properties: {buildTimeoutInMinutes: "${int}", customize: [{name: "string", type: "string"}], distribute: [{artifactTags: {}, runOutputName: "string", type: "string"}], source: {type: "string"}, stagingResourceGroup: "string", validate: {continueDistributeOnFailure: "${bool}", inVMValidations: [{name: "string", type: "string"}], sourceValidationOnly: "${bool}"}, vmProfile: {osDiskSizeGB: "${int}", userAssignedIdentities: ["string"], vmSize: "string", vnetConfig: {proxyVmSize: "string", subnetId: "string"}}}}
    );
  }
}
