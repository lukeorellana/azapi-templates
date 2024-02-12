import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * The details of authorized partners.
   */
readonly partnerAuthorization?: PartnerAuthorization;

/**
   * Provisioning state of the partner configuration.
   */
readonly provisioningState?: 'Canceled''Creating''Deleting''Failed''Succeeded''Updating';

/**
   * The list of authorized partners.
   */
readonly authorizedPartnersList?: Partner[];

/**
   * Time used to validate the authorization expiration time for each authorized partner. If DefaultMaximumExpirationTimeInDays isnot specified, the default is 7 days. Otherwise, allowed values are between 1 and 365 days.
   */
readonly defaultMaximumExpirationTimeInDays?: number;

/**
   * Expiration time of the partner authorization. If this timer expires, any request from this partner to create, update or delete resources in subscriber'scontext will fail. If specified, the allowed values are between 1 to the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration.If not specified, the default value will be the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration or 7 if this value is not specified.
   */
readonly authorizationExpirationTimeInUtc?: string;

/**
   * The partner name.
   */
readonly partnerName?: string;

/**
   * The immutableId of the corresponding partner registration.
   */
readonly partnerRegistrationImmutableId?: stringConstranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
