// https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicePrincipalDelegatedPermissionGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of claim values for delegated permission scopes which should be included in access tokens for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant.html#claim_values ServicePrincipalDelegatedPermissionGrant#claim_values}
  */
  readonly claimValues: string[];
  /**
  * The object ID of the service principal representing the resource to be accessed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant.html#resource_service_principal_object_id ServicePrincipalDelegatedPermissionGrant#resource_service_principal_object_id}
  */
  readonly resourceServicePrincipalObjectId: string;
  /**
  * The object ID of the service principal for which this delegated permission grant should be created
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant.html#service_principal_object_id ServicePrincipalDelegatedPermissionGrant#service_principal_object_id}
  */
  readonly servicePrincipalObjectId: string;
  /**
  * The object ID of the user on behalf of whom the service principal is authorized to access the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant.html#user_object_id ServicePrincipalDelegatedPermissionGrant#user_object_id}
  */
  readonly userObjectId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant.html#timeouts ServicePrincipalDelegatedPermissionGrant#timeouts}
  */
  readonly timeouts?: ServicePrincipalDelegatedPermissionGrantTimeouts;
}
export interface ServicePrincipalDelegatedPermissionGrantTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant.html#create ServicePrincipalDelegatedPermissionGrant#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant.html#delete ServicePrincipalDelegatedPermissionGrant#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant.html#read ServicePrincipalDelegatedPermissionGrant#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant.html#update ServicePrincipalDelegatedPermissionGrant#update}
  */
  readonly update?: string;
}

function servicePrincipalDelegatedPermissionGrantTimeoutsToTerraform(struct?: ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference | ServicePrincipalDelegatedPermissionGrantTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant.html azuread_service_principal_delegated_permission_grant}
*/
export class ServicePrincipalDelegatedPermissionGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_service_principal_delegated_permission_grant";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant.html azuread_service_principal_delegated_permission_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePrincipalDelegatedPermissionGrantConfig
  */
  public constructor(scope: Construct, id: string, config: ServicePrincipalDelegatedPermissionGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_service_principal_delegated_permission_grant',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._claimValues = config.claimValues;
    this._resourceServicePrincipalObjectId = config.resourceServicePrincipalObjectId;
    this._servicePrincipalObjectId = config.servicePrincipalObjectId;
    this._userObjectId = config.userObjectId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // claim_values - computed: false, optional: false, required: true
  private _claimValues?: string[]; 
  public get claimValues() {
    return this.getListAttribute('claim_values');
  }
  public set claimValues(value: string[]) {
    this._claimValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimValuesInput() {
    return this._claimValues
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_service_principal_object_id - computed: false, optional: false, required: true
  private _resourceServicePrincipalObjectId?: string; 
  public get resourceServicePrincipalObjectId() {
    return this.getStringAttribute('resource_service_principal_object_id');
  }
  public set resourceServicePrincipalObjectId(value: string) {
    this._resourceServicePrincipalObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServicePrincipalObjectIdInput() {
    return this._resourceServicePrincipalObjectId
  }

  // service_principal_object_id - computed: false, optional: false, required: true
  private _servicePrincipalObjectId?: string; 
  public get servicePrincipalObjectId() {
    return this.getStringAttribute('service_principal_object_id');
  }
  public set servicePrincipalObjectId(value: string) {
    this._servicePrincipalObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalObjectIdInput() {
    return this._servicePrincipalObjectId
  }

  // user_object_id - computed: false, optional: true, required: false
  private _userObjectId?: string | undefined; 
  public get userObjectId() {
    return this.getStringAttribute('user_object_id');
  }
  public set userObjectId(value: string | undefined) {
    this._userObjectId = value;
  }
  public resetUserObjectId() {
    this._userObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userObjectIdInput() {
    return this._userObjectId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicePrincipalDelegatedPermissionGrantTimeouts | undefined; 
  private __timeoutsOutput = new ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ServicePrincipalDelegatedPermissionGrantTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      claim_values: cdktf.listMapper(cdktf.stringToTerraform)(this._claimValues),
      resource_service_principal_object_id: cdktf.stringToTerraform(this._resourceServicePrincipalObjectId),
      service_principal_object_id: cdktf.stringToTerraform(this._servicePrincipalObjectId),
      user_object_id: cdktf.stringToTerraform(this._userObjectId),
      timeouts: servicePrincipalDelegatedPermissionGrantTimeoutsToTerraform(this._timeouts),
    };
  }
}
