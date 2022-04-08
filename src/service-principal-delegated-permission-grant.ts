// https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicePrincipalDelegatedPermissionGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of claim values for delegated permission scopes which should be included in access tokens for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant#claim_values ServicePrincipalDelegatedPermissionGrant#claim_values}
  */
  readonly claimValues: string[];
  /**
  * The object ID of the service principal representing the resource to be accessed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant#resource_service_principal_object_id ServicePrincipalDelegatedPermissionGrant#resource_service_principal_object_id}
  */
  readonly resourceServicePrincipalObjectId: string;
  /**
  * The object ID of the service principal for which this delegated permission grant should be created
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant#service_principal_object_id ServicePrincipalDelegatedPermissionGrant#service_principal_object_id}
  */
  readonly servicePrincipalObjectId: string;
  /**
  * The object ID of the user on behalf of whom the service principal is authorized to access the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant#user_object_id ServicePrincipalDelegatedPermissionGrant#user_object_id}
  */
  readonly userObjectId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant#timeouts ServicePrincipalDelegatedPermissionGrant#timeouts}
  */
  readonly timeouts?: ServicePrincipalDelegatedPermissionGrantTimeouts;
}
export interface ServicePrincipalDelegatedPermissionGrantTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant#create ServicePrincipalDelegatedPermissionGrant#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant#delete ServicePrincipalDelegatedPermissionGrant#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant#read ServicePrincipalDelegatedPermissionGrant#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant#update ServicePrincipalDelegatedPermissionGrant#update}
  */
  readonly update?: string;
}

export function servicePrincipalDelegatedPermissionGrantTimeoutsToTerraform(struct?: ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference | ServicePrincipalDelegatedPermissionGrantTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicePrincipalDelegatedPermissionGrantTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePrincipalDelegatedPermissionGrantTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant azuread_service_principal_delegated_permission_grant}
*/
export class ServicePrincipalDelegatedPermissionGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_service_principal_delegated_permission_grant";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_delegated_permission_grant azuread_service_principal_delegated_permission_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePrincipalDelegatedPermissionGrantConfig
  */
  public constructor(scope: Construct, id: string, config: ServicePrincipalDelegatedPermissionGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_service_principal_delegated_permission_grant',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.20.0',
        providerVersionConstraint: '~> 2.0'
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // claim_values - computed: false, optional: false, required: true
  private _claimValues?: string[]; 
  public get claimValues() {
    return cdktf.Fn.tolist(this.getListAttribute('claim_values'));
  }
  public set claimValues(value: string[]) {
    this._claimValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimValuesInput() {
    return this._claimValues;
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
    return this._resourceServicePrincipalObjectId;
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
    return this._servicePrincipalObjectId;
  }

  // user_object_id - computed: false, optional: true, required: false
  private _userObjectId?: string; 
  public get userObjectId() {
    return this.getStringAttribute('user_object_id');
  }
  public set userObjectId(value: string) {
    this._userObjectId = value;
  }
  public resetUserObjectId() {
    this._userObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userObjectIdInput() {
    return this._userObjectId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServicePrincipalDelegatedPermissionGrantTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      timeouts: servicePrincipalDelegatedPermissionGrantTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
