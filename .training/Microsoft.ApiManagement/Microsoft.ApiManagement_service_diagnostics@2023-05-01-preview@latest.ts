import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceDiagnosticsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceDiagnostics resource
 */
export class ApimanagementServiceDiagnostics extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceDiagnosticsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/diagnostics@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceDiagnosticsProps): string {
    return JSON.stringify(
        {properties: {alwaysLog: "allErrors", backend: {request: {body: {bytes: "${int}"}, dataMasking: {headers: [{mode: "string", value: "string"}], queryParams: [{mode: "string", value: "string"}]}, headers: ["string"]}, response: {body: {bytes: "${int}"}, dataMasking: {headers: [{mode: "string", value: "string"}], queryParams: [{mode: "string", value: "string"}]}, headers: ["string"]}}, frontend: {request: {body: {bytes: "${int}"}, dataMasking: {headers: [{mode: "string", value: "string"}], queryParams: [{mode: "string", value: "string"}]}, headers: ["string"]}, response: {body: {bytes: "${int}"}, dataMasking: {headers: [{mode: "string", value: "string"}], queryParams: [{mode: "string", value: "string"}]}, headers: ["string"]}}, httpCorrelationProtocol: "string", logClientIp: "${bool}", loggerId: "string", metrics: "${bool}", operationNameFormat: "string", sampling: {percentage: "${int}", samplingType: "fixed"}, verbosity: "string"}}
    );
  }
}
