// https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessPackageResourcePackageAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of access package this resource association is configured to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#access_package_id AccessPackageResourcePackageAssociation#access_package_id}
  */
  readonly accessPackageId: string;
  /**
  * The role of access type to the specified resource, valid values are `Member` and `Owner`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#access_type AccessPackageResourcePackageAssociation#access_type}
  */
  readonly accessType?: string;
  /**
  * The ID of the access package catalog association
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#catalog_resource_association_id AccessPackageResourcePackageAssociation#catalog_resource_association_id}
  */
  readonly catalogResourceAssociationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#id AccessPackageResourcePackageAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#timeouts AccessPackageResourcePackageAssociation#timeouts}
  */
  readonly timeouts?: AccessPackageResourcePackageAssociationTimeouts;
}
export interface AccessPackageResourcePackageAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#create AccessPackageResourcePackageAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#delete AccessPackageResourcePackageAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association#read AccessPackageResourcePackageAssociation#read}
  */
  readonly read?: string;
}

export function accessPackageResourcePackageAssociationTimeoutsToTerraform(struct?: AccessPackageResourcePackageAssociationTimeoutsOutputReference | AccessPackageResourcePackageAssociationTimeouts | cdktf.IResolvable): any {
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

export class AccessPackageResourcePackageAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessPackageResourcePackageAssociationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessPackageResourcePackageAssociationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association azuread_access_package_resource_package_association}
*/
export class AccessPackageResourcePackageAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_access_package_resource_package_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_package_association azuread_access_package_resource_package_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessPackageResourcePackageAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: AccessPackageResourcePackageAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_access_package_resource_package_association',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.37.0',
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
    this._accessPackageId = config.accessPackageId;
    this._accessType = config.accessType;
    this._catalogResourceAssociationId = config.catalogResourceAssociationId;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_package_id - computed: false, optional: false, required: true
  private _accessPackageId?: string; 
  public get accessPackageId() {
    return this.getStringAttribute('access_package_id');
  }
  public set accessPackageId(value: string) {
    this._accessPackageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPackageIdInput() {
    return this._accessPackageId;
  }

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // catalog_resource_association_id - computed: false, optional: false, required: true
  private _catalogResourceAssociationId?: string; 
  public get catalogResourceAssociationId() {
    return this.getStringAttribute('catalog_resource_association_id');
  }
  public set catalogResourceAssociationId(value: string) {
    this._catalogResourceAssociationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogResourceAssociationIdInput() {
    return this._catalogResourceAssociationId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccessPackageResourcePackageAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessPackageResourcePackageAssociationTimeouts) {
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
      access_package_id: cdktf.stringToTerraform(this._accessPackageId),
      access_type: cdktf.stringToTerraform(this._accessType),
      catalog_resource_association_id: cdktf.stringToTerraform(this._catalogResourceAssociationId),
      id: cdktf.stringToTerraform(this._id),
      timeouts: accessPackageResourcePackageAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
