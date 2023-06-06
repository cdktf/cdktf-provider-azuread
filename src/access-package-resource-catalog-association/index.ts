/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessPackageResourceCatalogAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique ID of the access package catalog
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#catalog_id AccessPackageResourceCatalogAssociation#catalog_id}
  */
  readonly catalogId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#id AccessPackageResourceCatalogAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique identifier of the resource in the origin system. In the case of an Azure AD group, this is the identifier of the group
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#resource_origin_id AccessPackageResourceCatalogAssociation#resource_origin_id}
  */
  readonly resourceOriginId: string;
  /**
  * The type of the resource in the origin system, such as SharePointOnline, AadApplication or AadGroup
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#resource_origin_system AccessPackageResourceCatalogAssociation#resource_origin_system}
  */
  readonly resourceOriginSystem: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#timeouts AccessPackageResourceCatalogAssociation#timeouts}
  */
  readonly timeouts?: AccessPackageResourceCatalogAssociationTimeouts;
}
export interface AccessPackageResourceCatalogAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#create AccessPackageResourceCatalogAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#delete AccessPackageResourceCatalogAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association#read AccessPackageResourceCatalogAssociation#read}
  */
  readonly read?: string;
}

export function accessPackageResourceCatalogAssociationTimeoutsToTerraform(struct?: AccessPackageResourceCatalogAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class AccessPackageResourceCatalogAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessPackageResourceCatalogAssociationTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessPackageResourceCatalogAssociationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association azuread_access_package_resource_catalog_association}
*/
export class AccessPackageResourceCatalogAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_access_package_resource_catalog_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_resource_catalog_association azuread_access_package_resource_catalog_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessPackageResourceCatalogAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: AccessPackageResourceCatalogAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_access_package_resource_catalog_association',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.39.0',
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
    this._catalogId = config.catalogId;
    this._id = config.id;
    this._resourceOriginId = config.resourceOriginId;
    this._resourceOriginSystem = config.resourceOriginSystem;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
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

  // resource_origin_id - computed: false, optional: false, required: true
  private _resourceOriginId?: string; 
  public get resourceOriginId() {
    return this.getStringAttribute('resource_origin_id');
  }
  public set resourceOriginId(value: string) {
    this._resourceOriginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceOriginIdInput() {
    return this._resourceOriginId;
  }

  // resource_origin_system - computed: false, optional: false, required: true
  private _resourceOriginSystem?: string; 
  public get resourceOriginSystem() {
    return this.getStringAttribute('resource_origin_system');
  }
  public set resourceOriginSystem(value: string) {
    this._resourceOriginSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceOriginSystemInput() {
    return this._resourceOriginSystem;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccessPackageResourceCatalogAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessPackageResourceCatalogAssociationTimeouts) {
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
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      id: cdktf.stringToTerraform(this._id),
      resource_origin_id: cdktf.stringToTerraform(this._resourceOriginId),
      resource_origin_system: cdktf.stringToTerraform(this._resourceOriginSystem),
      timeouts: accessPackageResourceCatalogAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
