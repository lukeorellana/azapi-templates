import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PeeringPeerasnsProps extends IAzAPIBaseProps {
/**
   * The Autonomous System Number (ASN) of the peer.
   */
readonly peerAsn?: number;

/**
   * The contact details of the peer.
   */
readonly peerContactDetail?: ContactDetail[];

/**
   * The name of the peer.
   */
readonly peerName?: string;

/**
   * The e-mail address of the contact.
   */
readonly email?: string;

/**
   * The phone number of the contact.
   */
readonly phone?: string;

/**
   * The role of the contact.
   */
readonly role?: 'Escalation''Noc''Other''Policy''Service''Technical';
}

/**
 * PeeringPeerasns resource
 */
export class PeeringPeerasns extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PeeringPeerasnsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Peering/peerAsns@2022-10-01";
  }

  protected getResourceBody(props: PeeringPeerasnsProps): string {
    return JSON.stringify(
        {properties: {peerAsn: "${int}", peerContactDetail: [{email: "string", phone: "string", role: "string"}], peerName: "string"}}
    );
  }
}
