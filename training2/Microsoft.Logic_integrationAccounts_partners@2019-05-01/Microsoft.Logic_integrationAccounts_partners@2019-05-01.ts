import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsPartnersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:numberegrationAccounts;

/**
   * The partner content.
   */
readonly content: PartnerContent;

/**
   * The metadata.
   */
readonly metadata?: For Bicep, you can use theany()function.;

/**
   * The partner type.
   */
readonly partnerType: 'B2B''NotSpecified';

/**
   * The B2B partner content.
   */
readonly b2b?: B2BPartnerContent;

/**
   * The list of partner business identities.
   */
readonly businessIdentities?: BusinessIdentity[];

/**
   * The business identity qualifier e.g. as2identity, ZZ, ZZZ, 31, 32
   */
readonly qualifier: string;

/**
   * The user defined business identity value.
   */
readonly value: string;
}

/**
 * LogicIntegrationaccountsPartners resource
 */
export class LogicIntegrationaccountsPartners extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsPartnersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/partners@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsPartnersProps): string {
    return JSON.stringify(
        {properties: {content: {b2b: {businessIdentities: [{qualifier: "string", value: "string"}]}}, partnerType: "string"}}
    );
  }
}
