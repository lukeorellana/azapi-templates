import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface FluidrelayFluidrelayserversProps extends IAzAPIBaseProps {

}

/**
 * FluidrelayFluidrelayservers resource
 */
export class FluidrelayFluidrelayservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: FluidrelayFluidrelayserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.FluidRelay/fluidRelayServers@2022-06-01";
  }

  protected getResourceBody(props: FluidrelayFluidrelayserversProps): string {
    return JSON.stringify(
        {properties: {encryption: {customerManagedKeyEncryption: {keyEncryptionKeyIdentity: {identityType: "string", userAssignedIdentityResourceId: "string"}, keyEncryptionKeyUrl: "string"}}, provisioningState: "string", storagesku: "string"}}
    );
  }
}
