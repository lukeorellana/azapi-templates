import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DomainregistrationDomainsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * 
   */
readonly authCode?: string;

/**
   * trueif the domain should be automatically renewed; otherwise,false.
   */
readonly autoRenew?: bool;

/**
   * Legal agreement consent.
   */
readonly consent: DomainPurchaseConsent;

/**
   * Administrative contact.
   */
readonly contactAdmin: Contact;

/**
   * Billing contact.
   */
readonly contactBilling: Contact;

/**
   * Registrant contact.
   */
readonly contactRegistrant: Contact;

/**
   * Technical contact.
   */
readonly contactTech: Contact;

/**
   * Current DNS type
   */
readonly dnsType?: 'AzureDns''DefaultDomainRegistrarDns';

/**
   * Azure DNS Zone to use
   */
readonly dnsZoneId?: string;

/**
   * trueif domain privacy is enabled for this domain; otherwise,false.
   */
readonly privacy?: bool;

/**
   * Target DNS type (would be used for migration)
   */
readonly targetDnsType?: 'AzureDns''DefaultDomainRegistrarDns';

/**
   * Timestamp when the agreements were accepted.
   */
readonly agreedAt?: string;

/**
   * Client IP address.
   */
readonly agreedBy?: string;

/**
   * List of applicable legal agreement keys. This list can be retrieved using ListLegalAgreements API underTopLevelDomainresource.
   */
readonly agreementKeys?: string[];

/**
   * Mailing address.
   */
readonly addressMailing?: Address;

/**
   * Email address.
   */
readonly email: string;

/**
   * Fax number.
   */
readonly fax?: string;

/**
   * Job title.
   */
readonly jobTitle?: string;

/**
   * First name.
   */
readonly nameFirst: string;

/**
   * Last name.
   */
readonly nameLast: string;

/**
   * Middle name.
   */
readonly nameMiddle?: string;

/**
   * Organization contact belongs to.
   */
readonly organization?: string;

/**
   * Phone number.
   */
readonly phone: string;

/**
   * First line of an Address.
   */
readonly address1: string;

/**
   * The second line of the Address. Optional.
   */
readonly address2?: string;

/**
   * The city for the address.
   */
readonly city: string;

/**
   * The country for the address.
   */
readonly country: string;

/**
   * The postal code for the address.
   */
readonly postalCode: string;

/**
   * The state or province for the address.
   */
readonly state: string;
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
