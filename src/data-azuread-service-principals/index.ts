/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/service_principals
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadServicePrincipalsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The client IDs of the applications associated with the service principals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/service_principals#client_ids DataAzureadServicePrincipals#client_ids}
  */
  readonly clientIds?: string[];
  /**
  * The display names of the applications associated with the service principals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/service_principals#display_names DataAzureadServicePrincipals#display_names}
  */
  readonly displayNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/service_principals#id DataAzureadServicePrincipals#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignore missing service principals and return the service principals that were found. The data source will still fail if no service principals are found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/service_principals#ignore_missing DataAzureadServicePrincipals#ignore_missing}
  */
  readonly ignoreMissing?: boolean | cdktf.IResolvable;
  /**
  * The object IDs of the service principals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/service_principals#object_ids DataAzureadServicePrincipals#object_ids}
  */
  readonly objectIds?: string[];
  /**
  * Fetch all service principals with no filter and return all that were found. The data source will still fail if no service principals are found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/service_principals#return_all DataAzureadServicePrincipals#return_all}
  */
  readonly returnAll?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/service_principals#timeouts DataAzureadServicePrincipals#timeouts}
  */
  readonly timeouts?: DataAzureadServicePrincipalsTimeouts;
}
export interface DataAzureadServicePrincipalsServicePrincipals {
}

export function dataAzureadServicePrincipalsServicePrincipalsToTerraform(struct?: DataAzureadServicePrincipalsServicePrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzureadServicePrincipalsServicePrincipalsToHclTerraform(struct?: DataAzureadServicePrincipalsServicePrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzureadServicePrincipalsServicePrincipalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadServicePrincipalsServicePrincipals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadServicePrincipalsServicePrincipals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_enabled - computed: true, optional: false, required: false
  public get accountEnabled() {
    return this.getBooleanAttribute('account_enabled');
  }

  // app_role_assignment_required - computed: true, optional: false, required: false
  public get appRoleAssignmentRequired() {
    return this.getBooleanAttribute('app_role_assignment_required');
  }

  // application_tenant_id - computed: true, optional: false, required: false
  public get applicationTenantId() {
    return this.getStringAttribute('application_tenant_id');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // preferred_single_sign_on_mode - computed: true, optional: false, required: false
  public get preferredSingleSignOnMode() {
    return this.getStringAttribute('preferred_single_sign_on_mode');
  }

  // saml_metadata_url - computed: true, optional: false, required: false
  public get samlMetadataUrl() {
    return this.getStringAttribute('saml_metadata_url');
  }

  // service_principal_names - computed: true, optional: false, required: false
  public get servicePrincipalNames() {
    return this.getListAttribute('service_principal_names');
  }

  // sign_in_audience - computed: true, optional: false, required: false
  public get signInAudience() {
    return this.getStringAttribute('sign_in_audience');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAzureadServicePrincipalsServicePrincipalsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadServicePrincipalsServicePrincipalsOutputReference {
    return new DataAzureadServicePrincipalsServicePrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadServicePrincipalsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/service_principals#read DataAzureadServicePrincipals#read}
  */
  readonly read?: string;
}

export function dataAzureadServicePrincipalsTimeoutsToTerraform(struct?: DataAzureadServicePrincipalsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzureadServicePrincipalsTimeoutsToHclTerraform(struct?: DataAzureadServicePrincipalsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzureadServicePrincipalsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzureadServicePrincipalsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadServicePrincipalsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/service_principals azuread_service_principals}
*/
export class DataAzureadServicePrincipals extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_service_principals";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzureadServicePrincipals resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzureadServicePrincipals to import
  * @param importFromId The id of the existing DataAzureadServicePrincipals that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/service_principals#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzureadServicePrincipals to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_service_principals", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/data-sources/service_principals azuread_service_principals} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadServicePrincipalsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadServicePrincipalsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_service_principals',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '3.7.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientIds = config.clientIds;
    this._displayNames = config.displayNames;
    this._id = config.id;
    this._ignoreMissing = config.ignoreMissing;
    this._objectIds = config.objectIds;
    this._returnAll = config.returnAll;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_ids - computed: true, optional: true, required: false
  private _clientIds?: string[]; 
  public get clientIds() {
    return this.getListAttribute('client_ids');
  }
  public set clientIds(value: string[]) {
    this._clientIds = value;
  }
  public resetClientIds() {
    this._clientIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdsInput() {
    return this._clientIds;
  }

  // display_names - computed: true, optional: true, required: false
  private _displayNames?: string[]; 
  public get displayNames() {
    return this.getListAttribute('display_names');
  }
  public set displayNames(value: string[]) {
    this._displayNames = value;
  }
  public resetDisplayNames() {
    this._displayNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNamesInput() {
    return this._displayNames;
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

  // ignore_missing - computed: false, optional: true, required: false
  private _ignoreMissing?: boolean | cdktf.IResolvable; 
  public get ignoreMissing() {
    return this.getBooleanAttribute('ignore_missing');
  }
  public set ignoreMissing(value: boolean | cdktf.IResolvable) {
    this._ignoreMissing = value;
  }
  public resetIgnoreMissing() {
    this._ignoreMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingInput() {
    return this._ignoreMissing;
  }

  // object_ids - computed: true, optional: true, required: false
  private _objectIds?: string[]; 
  public get objectIds() {
    return this.getListAttribute('object_ids');
  }
  public set objectIds(value: string[]) {
    this._objectIds = value;
  }
  public resetObjectIds() {
    this._objectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdsInput() {
    return this._objectIds;
  }

  // return_all - computed: false, optional: true, required: false
  private _returnAll?: boolean | cdktf.IResolvable; 
  public get returnAll() {
    return this.getBooleanAttribute('return_all');
  }
  public set returnAll(value: boolean | cdktf.IResolvable) {
    this._returnAll = value;
  }
  public resetReturnAll() {
    this._returnAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnAllInput() {
    return this._returnAll;
  }

  // service_principals - computed: true, optional: false, required: false
  private _servicePrincipals = new DataAzureadServicePrincipalsServicePrincipalsList(this, "service_principals", false);
  public get servicePrincipals() {
    return this._servicePrincipals;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzureadServicePrincipalsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzureadServicePrincipalsTimeouts) {
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
      client_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientIds),
      display_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._displayNames),
      id: cdktf.stringToTerraform(this._id),
      ignore_missing: cdktf.booleanToTerraform(this._ignoreMissing),
      object_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectIds),
      return_all: cdktf.booleanToTerraform(this._returnAll),
      timeouts: dataAzureadServicePrincipalsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._displayNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_missing: {
        value: cdktf.booleanToHclTerraform(this._ignoreMissing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      object_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      return_all: {
        value: cdktf.booleanToHclTerraform(this._returnAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: dataAzureadServicePrincipalsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzureadServicePrincipalsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
