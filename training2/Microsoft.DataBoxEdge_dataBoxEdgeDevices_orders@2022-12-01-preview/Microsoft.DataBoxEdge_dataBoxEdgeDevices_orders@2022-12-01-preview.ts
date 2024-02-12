import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesOrdersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dataBoxEdgeDevices;

/**
   * The contact details.
   */
readonly contactInformation: ContactDetails;

/**
   * ShipmentType of the order
   */
readonly shipmentType?: 'NotApplicable''SelfPickup''ShippedToCustomer';

/**
   * The shipping address.
   */
readonly shippingAddress?: Address;

/**
   * The name of the company.
   */
readonly companyName: string;

/**
   * The contact person name.
   */
readonly contactPerson: string;

/**
   * The email list.
   */
readonly emailList: string[];

/**
   * The phone number.
   */
readonly phone: string;

/**
   * The address line1.
   */
readonly addressLine1?: string;

/**
   * The address line2.
   */
readonly addressLine2?: string;

/**
   * The address line3.
   */
readonly addressLine3?: string;

/**
   * The city name.
   */
readonly city?: string;

/**
   * The country name.
   */
readonly country: string;

/**
   * The postal code.
   */
readonly postalCode?: string;

/**
   * The state name.
   */
readonly state?: string;
}

/**
 * DataboxedgeDataboxedgedevicesOrders resource
 */
export class DataboxedgeDataboxedgedevicesOrders extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataboxedgeDataboxedgedevicesOrdersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders@2022-12-01-preview";
  }

  protected getResourceBody(props: DataboxedgeDataboxedgedevicesOrdersProps): string {
    return JSON.stringify(
        {properties: {contactInformation: {companyName: "string", contactPerson: "string", emailList: ["string"], phone: "string"}, shipmentType: "string", shippingAddress: {addressLine1: "string", addressLine2: "string", addressLine3: "string", city: "string", country: "string", postalCode: "string", state: "string"}}}
    );
  }
}
