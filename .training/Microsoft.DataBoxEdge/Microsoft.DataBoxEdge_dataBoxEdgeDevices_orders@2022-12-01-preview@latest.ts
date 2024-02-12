import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataboxedgeDataboxedgedevicesOrdersProps extends IAzAPIBaseProps {

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
