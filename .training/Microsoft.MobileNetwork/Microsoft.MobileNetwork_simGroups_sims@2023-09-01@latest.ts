import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkSimgroupsSimsProps extends IAzAPIBaseProps {

}

/**
 * MobilenetworkSimgroupsSims resource
 */
export class MobilenetworkSimgroupsSims extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkSimgroupsSimsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/simGroups/sims@2023-09-01";
  }

  protected getResourceBody(props: MobilenetworkSimgroupsSimsProps): string {
    return JSON.stringify(
        {properties: {authenticationKey: "string", deviceType: "string", integratedCircuitCardIdentifier: "string", internationalMobileSubscriberIdentity: "string", operatorKeyCode: "string", simPolicy: {id: "string"}, staticIpConfiguration: [{attachedDataNetwork: {id: "string"}, slice: {id: "string"}, staticIp: {ipv4Address: "string"}}]}}
    );
  }
}
