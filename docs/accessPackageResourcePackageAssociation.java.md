# `accessPackageResourcePackageAssociation` Submodule <a name="`accessPackageResourcePackageAssociation` Submodule" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessPackageResourcePackageAssociation <a name="AccessPackageResourcePackageAssociation" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association azuread_access_package_resource_package_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_resource_package_association.AccessPackageResourcePackageAssociation;

AccessPackageResourcePackageAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accessPackageId(java.lang.String)
    .catalogResourceAssociationId(java.lang.String)
//  .accessType(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(AccessPackageResourcePackageAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.accessPackageId">accessPackageId</a></code> | <code>java.lang.String</code> | The ID of access package this resource association is configured to. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.catalogResourceAssociationId">catalogResourceAssociationId</a></code> | <code>java.lang.String</code> | The ID of the access package catalog association. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.accessType">accessType</a></code> | <code>java.lang.String</code> | The role of access type to the specified resource, valid values are `Member` and `Owner`. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#id AccessPackageResourcePackageAssociation#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessPackageId`<sup>Required</sup> <a name="accessPackageId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.accessPackageId"></a>

- *Type:* java.lang.String

The ID of access package this resource association is configured to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#access_package_id AccessPackageResourcePackageAssociation#access_package_id}

---

##### `catalogResourceAssociationId`<sup>Required</sup> <a name="catalogResourceAssociationId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.catalogResourceAssociationId"></a>

- *Type:* java.lang.String

The ID of the access package catalog association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#catalog_resource_association_id AccessPackageResourcePackageAssociation#catalog_resource_association_id}

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.accessType"></a>

- *Type:* java.lang.String

The role of access type to the specified resource, valid values are `Member` and `Owner`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#access_type AccessPackageResourcePackageAssociation#access_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#id AccessPackageResourcePackageAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#timeouts AccessPackageResourcePackageAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetAccessType">resetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.putTimeouts"></a>

```java
public void putTimeouts(AccessPackageResourcePackageAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a>

---

##### `resetAccessType` <a name="resetAccessType" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetAccessType"></a>

```java
public void resetAccessType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessPackageResourcePackageAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_resource_package_association.AccessPackageResourcePackageAssociation;

AccessPackageResourcePackageAssociation.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_resource_package_association.AccessPackageResourcePackageAssociation;

AccessPackageResourcePackageAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_resource_package_association.AccessPackageResourcePackageAssociation;

AccessPackageResourcePackageAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_resource_package_association.AccessPackageResourcePackageAssociation;

AccessPackageResourcePackageAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccessPackageResourcePackageAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AccessPackageResourcePackageAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccessPackageResourcePackageAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccessPackageResourcePackageAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AccessPackageResourcePackageAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference">AccessPackageResourcePackageAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessPackageIdInput">accessPackageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessTypeInput">accessTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.catalogResourceAssociationIdInput">catalogResourceAssociationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessPackageId">accessPackageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessType">accessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.catalogResourceAssociationId">catalogResourceAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.timeouts"></a>

```java
public AccessPackageResourcePackageAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference">AccessPackageResourcePackageAssociationTimeoutsOutputReference</a>

---

##### `accessPackageIdInput`<sup>Optional</sup> <a name="accessPackageIdInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessPackageIdInput"></a>

```java
public java.lang.String getAccessPackageIdInput();
```

- *Type:* java.lang.String

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessTypeInput"></a>

```java
public java.lang.String getAccessTypeInput();
```

- *Type:* java.lang.String

---

##### `catalogResourceAssociationIdInput`<sup>Optional</sup> <a name="catalogResourceAssociationIdInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.catalogResourceAssociationIdInput"></a>

```java
public java.lang.String getCatalogResourceAssociationIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a>

---

##### `accessPackageId`<sup>Required</sup> <a name="accessPackageId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessPackageId"></a>

```java
public java.lang.String getAccessPackageId();
```

- *Type:* java.lang.String

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

---

##### `catalogResourceAssociationId`<sup>Required</sup> <a name="catalogResourceAssociationId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.catalogResourceAssociationId"></a>

```java
public java.lang.String getCatalogResourceAssociationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessPackageResourcePackageAssociationConfig <a name="AccessPackageResourcePackageAssociationConfig" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_resource_package_association.AccessPackageResourcePackageAssociationConfig;

AccessPackageResourcePackageAssociationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accessPackageId(java.lang.String)
    .catalogResourceAssociationId(java.lang.String)
//  .accessType(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(AccessPackageResourcePackageAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.accessPackageId">accessPackageId</a></code> | <code>java.lang.String</code> | The ID of access package this resource association is configured to. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.catalogResourceAssociationId">catalogResourceAssociationId</a></code> | <code>java.lang.String</code> | The ID of the access package catalog association. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.accessType">accessType</a></code> | <code>java.lang.String</code> | The role of access type to the specified resource, valid values are `Member` and `Owner`. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#id AccessPackageResourcePackageAssociation#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessPackageId`<sup>Required</sup> <a name="accessPackageId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.accessPackageId"></a>

```java
public java.lang.String getAccessPackageId();
```

- *Type:* java.lang.String

The ID of access package this resource association is configured to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#access_package_id AccessPackageResourcePackageAssociation#access_package_id}

---

##### `catalogResourceAssociationId`<sup>Required</sup> <a name="catalogResourceAssociationId" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.catalogResourceAssociationId"></a>

```java
public java.lang.String getCatalogResourceAssociationId();
```

- *Type:* java.lang.String

The ID of the access package catalog association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#catalog_resource_association_id AccessPackageResourcePackageAssociation#catalog_resource_association_id}

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

The role of access type to the specified resource, valid values are `Member` and `Owner`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#access_type AccessPackageResourcePackageAssociation#access_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#id AccessPackageResourcePackageAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationConfig.property.timeouts"></a>

```java
public AccessPackageResourcePackageAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#timeouts AccessPackageResourcePackageAssociation#timeouts}

---

### AccessPackageResourcePackageAssociationTimeouts <a name="AccessPackageResourcePackageAssociationTimeouts" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_resource_package_association.AccessPackageResourcePackageAssociationTimeouts;

AccessPackageResourcePackageAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#create AccessPackageResourcePackageAssociation#create}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#delete AccessPackageResourcePackageAssociation#delete}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#read AccessPackageResourcePackageAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#create AccessPackageResourcePackageAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#delete AccessPackageResourcePackageAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs/resources/access_package_resource_package_association#read AccessPackageResourcePackageAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessPackageResourcePackageAssociationTimeoutsOutputReference <a name="AccessPackageResourcePackageAssociationTimeoutsOutputReference" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_resource_package_association.AccessPackageResourcePackageAssociationTimeoutsOutputReference;

new AccessPackageResourcePackageAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageResourcePackageAssociation.AccessPackageResourcePackageAssociationTimeouts">AccessPackageResourcePackageAssociationTimeouts</a>

---



