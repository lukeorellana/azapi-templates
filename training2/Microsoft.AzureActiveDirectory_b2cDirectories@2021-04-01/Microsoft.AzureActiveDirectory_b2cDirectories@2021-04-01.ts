import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzureactivedirectoryB2CdirectoriesProps extends IAzAPIBaseProps {
/**
   * SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing ataka.ms/b2cBilling.
   */
readonly sku: B2CResourceSKU;

/**
   * These properties are used to create the Azure AD B2C tenant. These properties are not part of the Azure resource.
   */
readonly createTenantProperties?: CreateTenantProperties;

/**
   * Country code of Azure tenant (e.g. 'US'). Refer toaka.ms/B2CDataResidencyto see valid country codes and corresponding data residency locations. If you do not see a country code in an valid data residency location, choose one from the list.
   */
readonly countryCode?: string;

/**
   * The display name of the Azure AD B2C tenant.
   */
readonly displayName?: string;

/**
   * The tier of the tenant.
   */
readonly tier?: 'A0';
}

/**
 * AzureactivedirectoryB2Cdirectories resource
 */
export class AzureactivedirectoryB2Cdirectories extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzureactivedirectoryB2CdirectoriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureActiveDirectory/b2cDirectories@2021-04-01";
  }

  protected getResourceBody(props: AzureactivedirectoryB2CdirectoriesProps): string {
    return JSON.stringify(
        {properties: {createTenantProperties: {countryCode: "string", displayName: "string"}}, sku: {name: "string", tier: "A0"}}
    );
  }
}
