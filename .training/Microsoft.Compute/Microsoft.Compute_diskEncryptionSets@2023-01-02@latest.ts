import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ComputeDiskencryptionsetsProps extends IAzAPIBaseProps {

}

/**
 * ComputeDiskencryptionsets resource
 */
export class ComputeDiskencryptionsets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ComputeDiskencryptionsetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Compute/diskEncryptionSets@2023-01-02";
  }

  protected getResourceBody(props: ComputeDiskencryptionsetsProps): string {
    return JSON.stringify(
        {properties: {activeKey: {keyUrl: "string", sourceVault: {id: "string"}}, encryptionType: "string", federatedClientId: "string", rotationToLatestKeyVersionEnabled: "${bool}"}}
    );
  }
}
