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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_claims_mapping_policy_assignment#id ServicePrincipalClaimsMappingPolicyAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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
        providerVersion: '2.25.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._claimsMappingPolicyId = config.claimsMappingPolicyId;
    this._id = config.id;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
      id: cdktf.stringToTerraform(this._id),
      service_principal_id: cdktf.stringToTerraform(this._servicePrincipalId),
    };
  }
}
