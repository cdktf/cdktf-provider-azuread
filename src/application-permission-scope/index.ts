/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationPermissionScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope#admin_consent_description ApplicationPermissionScope#admin_consent_description}
  */
  readonly adminConsentDescription: string;
  /**
  * Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope#admin_consent_display_name ApplicationPermissionScope#admin_consent_display_name}
  */
  readonly adminConsentDisplayName: string;
  /**
  * The resource ID of the application to which this permission scope should be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope#application_id ApplicationPermissionScope#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope#id ApplicationPermissionScope#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique identifier of the permission scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope#scope_id ApplicationPermissionScope#scope_id}
  */
  readonly scopeId: string;
  /**
  * Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope#type ApplicationPermissionScope#type}
  */
  readonly type?: string;
  /**
  * Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope#user_consent_description ApplicationPermissionScope#user_consent_description}
  */
  readonly userConsentDescription?: string;
  /**
  * Display name for the delegated permission that appears in the end user consent experience
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope#user_consent_display_name ApplicationPermissionScope#user_consent_display_name}
  */
  readonly userConsentDisplayName?: string;
  /**
  * The value that is used for the `scp` claim in OAuth access tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope#value ApplicationPermissionScope#value}
  */
  readonly value: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope#timeouts ApplicationPermissionScope#timeouts}
  */
  readonly timeouts?: ApplicationPermissionScopeTimeouts;
}
export interface ApplicationPermissionScopeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope#create ApplicationPermissionScope#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope#delete ApplicationPermissionScope#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope#read ApplicationPermissionScope#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope#update ApplicationPermissionScope#update}
  */
  readonly update?: string;
}

export function applicationPermissionScopeTimeoutsToTerraform(struct?: ApplicationPermissionScopeTimeouts | cdktf.IResolvable): any {
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


export function applicationPermissionScopeTimeoutsToHclTerraform(struct?: ApplicationPermissionScopeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationPermissionScopeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationPermissionScopeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ApplicationPermissionScopeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope azuread_application_permission_scope}
*/
export class ApplicationPermissionScope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_application_permission_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationPermissionScope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationPermissionScope to import
  * @param importFromId The id of the existing ApplicationPermissionScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationPermissionScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_application_permission_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.52.0/docs/resources/application_permission_scope azuread_application_permission_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationPermissionScopeConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationPermissionScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_application_permission_scope',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.52.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminConsentDescription = config.adminConsentDescription;
    this._adminConsentDisplayName = config.adminConsentDisplayName;
    this._applicationId = config.applicationId;
    this._id = config.id;
    this._scopeId = config.scopeId;
    this._type = config.type;
    this._userConsentDescription = config.userConsentDescription;
    this._userConsentDisplayName = config.userConsentDisplayName;
    this._value = config.value;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_consent_description - computed: false, optional: false, required: true
  private _adminConsentDescription?: string; 
  public get adminConsentDescription() {
    return this.getStringAttribute('admin_consent_description');
  }
  public set adminConsentDescription(value: string) {
    this._adminConsentDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminConsentDescriptionInput() {
    return this._adminConsentDescription;
  }

  // admin_consent_display_name - computed: false, optional: false, required: true
  private _adminConsentDisplayName?: string; 
  public get adminConsentDisplayName() {
    return this.getStringAttribute('admin_consent_display_name');
  }
  public set adminConsentDisplayName(value: string) {
    this._adminConsentDisplayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminConsentDisplayNameInput() {
    return this._adminConsentDisplayName;
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // scope_id - computed: false, optional: false, required: true
  private _scopeId?: string; 
  public get scopeId() {
    return this.getStringAttribute('scope_id');
  }
  public set scopeId(value: string) {
    this._scopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_consent_description - computed: false, optional: true, required: false
  private _userConsentDescription?: string; 
  public get userConsentDescription() {
    return this.getStringAttribute('user_consent_description');
  }
  public set userConsentDescription(value: string) {
    this._userConsentDescription = value;
  }
  public resetUserConsentDescription() {
    this._userConsentDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userConsentDescriptionInput() {
    return this._userConsentDescription;
  }

  // user_consent_display_name - computed: false, optional: true, required: false
  private _userConsentDisplayName?: string; 
  public get userConsentDisplayName() {
    return this.getStringAttribute('user_consent_display_name');
  }
  public set userConsentDisplayName(value: string) {
    this._userConsentDisplayName = value;
  }
  public resetUserConsentDisplayName() {
    this._userConsentDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userConsentDisplayNameInput() {
    return this._userConsentDisplayName;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApplicationPermissionScopeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApplicationPermissionScopeTimeouts) {
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
      admin_consent_description: cdktf.stringToTerraform(this._adminConsentDescription),
      admin_consent_display_name: cdktf.stringToTerraform(this._adminConsentDisplayName),
      application_id: cdktf.stringToTerraform(this._applicationId),
      id: cdktf.stringToTerraform(this._id),
      scope_id: cdktf.stringToTerraform(this._scopeId),
      type: cdktf.stringToTerraform(this._type),
      user_consent_description: cdktf.stringToTerraform(this._userConsentDescription),
      user_consent_display_name: cdktf.stringToTerraform(this._userConsentDisplayName),
      value: cdktf.stringToTerraform(this._value),
      timeouts: applicationPermissionScopeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_consent_description: {
        value: cdktf.stringToHclTerraform(this._adminConsentDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_consent_display_name: {
        value: cdktf.stringToHclTerraform(this._adminConsentDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_id: {
        value: cdktf.stringToHclTerraform(this._scopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_consent_description: {
        value: cdktf.stringToHclTerraform(this._userConsentDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_consent_display_name: {
        value: cdktf.stringToHclTerraform(this._userConsentDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: applicationPermissionScopeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationPermissionScopeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
