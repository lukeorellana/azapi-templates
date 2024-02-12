import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DomainregistrationDomainsProps extends IAzAPIBaseProps {

}

/**
 * DomainregistrationDomains resource
 */
export class DomainregistrationDomains extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DomainregistrationDomainsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DomainRegistration/domains@2022-09-01";
  }

  protected getResourceBody(props: DomainregistrationDomainsProps): string {
    return JSON.stringify(
        {properties: {authCode: "string", autoRenew: "${bool}", consent: {agreedAt: "string", agreedBy: "string", agreementKeys: ["string"]}, contactAdmin: {addressMailing: {address1: "string", address2: "string", city: "string", country: "string", postalCode: "string", state: "string"}, email: "string", fax: "string", jobTitle: "string", nameFirst: "string", nameLast: "string", nameMiddle: "string", organization: "string", phone: "string"}, contactBilling: {addressMailing: {address1: "string", address2: "string", city: "string", country: "string", postalCode: "string", state: "string"}, email: "string", fax: "string", jobTitle: "string", nameFirst: "string", nameLast: "string", nameMiddle: "string", organization: "string", phone: "string"}, contactRegistrant: {addressMailing: {address1: "string", address2: "string", city: "string", country: "string", postalCode: "string", state: "string"}, email: "string", fax: "string", jobTitle: "string", nameFirst: "string", nameLast: "string", nameMiddle: "string", organization: "string", phone: "string"}, contactTech: {addressMailing: {address1: "string", address2: "string", city: "string", country: "string", postalCode: "string", state: "string"}, email: "string", fax: "string", jobTitle: "string", nameFirst: "string", nameLast: "string", nameMiddle: "string", organization: "string", phone: "string"}, dnsType: "string", dnsZoneId: "string", privacy: "${bool}", targetDnsType: "string"}, kind: "string"}
    );
  }
}
