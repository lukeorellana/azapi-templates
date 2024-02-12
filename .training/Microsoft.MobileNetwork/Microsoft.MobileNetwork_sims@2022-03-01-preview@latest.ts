import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MobilenetworkSimsProps extends IAzAPIBaseProps {

}

/**
 * MobilenetworkSims resource
 */
export class MobilenetworkSims extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MobilenetworkSimsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MobileNetwork/sims@2022-03-01-preview";
  }

  protected getResourceBody(props: MobilenetworkSimsProps): string {
    return JSON.stringify(
        {properties: {authenticationKey: "string", deviceType: "string", integratedCircuitCardIdentifier: "string", internationalMobileSubscriberIdentity: "string", mobileNetwork: {id: "string"}, operatorKeyCode: "string", simPolicy: {id: "string"}, staticIpConfiguration: [{attachedDataNetwork: {id: "string"}, slice: {id: "string"}, staticIp: {ipv4Address: "string"}}]}}
    );
  }
}
