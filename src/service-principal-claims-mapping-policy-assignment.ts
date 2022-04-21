// https://www.terraform.io/docs/providers/azuread/r/service_principal_claims_mapping_policy_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicePrincipalClaimsMappingPolicyAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the claims mapping policy to assign
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_claims_mapping_policy_assignment#claims_mapping_policy_id ServicePrincipalClaimsMappingPolicyAssignment#claims_mapping_policy_id}
  */
  readonly claimsMappingPolicyId: string;
  /**
  * Object ID of the service principal for which to assign the policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_claims_mapping_policy_assignment#service_principal_id ServicePrincipalClaimsMappingPolicyAssignment#service_principal_id}
  */
  readonly servicePrincipalId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_claims_mapping_policy_assignment azuread_service_principal_claims_mapping_policy_assignment}
*/
export class ServicePrincipalClaimsMappingPolicyAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_service_principal_claims_mapping_policy_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_claims_mapping_policy_assignment azuread_service_principal_claims_mapping_policy_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePrincipalClaimsMappingPolicyAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: ServicePrincipalClaimsMappingPolicyAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_service_principal_claims_mapping_policy_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.21.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._claimsMappingPolicyId = config.claimsMappingPolicyId;
    this._servicePrincipalId = config.servicePrincipalId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // claims_mapping_policy_id - computed: false, optional: false, required: true
  private _claimsMappingPolicyId?: string; 
  public get claimsMappingPolicyId() {
    return this.getStringAttribute('claims_mapping_policy_id');
  }
  public set claimsMappingPolicyId(value: string) {
    this._claimsMappingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsMappingPolicyIdInput() {
    return this._claimsMappingPolicyId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_principal_id - computed: false, optional: false, required: true
  private _servicePrincipalId?: string; 
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }
  public set servicePrincipalId(value: string) {
    this._servicePrincipalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalIdInput() {
    return this._servicePrincipalId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      claims_mapping_policy_id: cdktf.stringToTerraform(this._claimsMappingPolicyId),
      service_principal_id: cdktf.stringToTerraform(this._servicePrincipalId),
    };
  }
}
