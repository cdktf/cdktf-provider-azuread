# `accessPackageResourceCatalogAssociation` Submodule <a name="`accessPackageResourceCatalogAssociation` Submodule" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessPackageResourceCatalogAssociation <a name="AccessPackageResourceCatalogAssociation" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association azuread_access_package_resource_catalog_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_resource_catalog_association.AccessPackageResourceCatalogAssociation;

AccessPackageResourceCatalogAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .catalogId(java.lang.String)
    .resourceOriginId(java.lang.String)
    .resourceOriginSystem(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(AccessPackageResourceCatalogAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.catalogId">catalogId</a></code> | <code>java.lang.String</code> | The unique ID of the access package catalog. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.resourceOriginId">resourceOriginId</a></code> | <code>java.lang.String</code> | The unique identifier of the resource in the origin system. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.resourceOriginSystem">resourceOriginSystem</a></code> | <code>java.lang.String</code> | The type of the resource in the origin system, such as SharePointOnline, AadApplication or AadGroup. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#id AccessPackageResourceCatalogAssociation#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.catalogId"></a>

- *Type:* java.lang.String

The unique ID of the access package catalog.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#catalog_id AccessPackageResourceCatalogAssociation#catalog_id}

---

##### `resourceOriginId`<sup>Required</sup> <a name="resourceOriginId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.resourceOriginId"></a>

- *Type:* java.lang.String

The unique identifier of the resource in the origin system.

In the case of an Azure AD group, this is the identifier of the group

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#resource_origin_id AccessPackageResourceCatalogAssociation#resource_origin_id}

---

##### `resourceOriginSystem`<sup>Required</sup> <a name="resourceOriginSystem" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.resourceOriginSystem"></a>

- *Type:* java.lang.String

The type of the resource in the origin system, such as SharePointOnline, AadApplication or AadGroup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#resource_origin_system AccessPackageResourceCatalogAssociation#resource_origin_system}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#id AccessPackageResourceCatalogAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#timeouts AccessPackageResourceCatalogAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.putTimeouts"></a>

```java
public void putTimeouts(AccessPackageResourceCatalogAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_resource_catalog_association.AccessPackageResourceCatalogAssociation;

AccessPackageResourceCatalogAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_resource_catalog_association.AccessPackageResourceCatalogAssociation;

AccessPackageResourceCatalogAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_resource_catalog_association.AccessPackageResourceCatalogAssociation;

AccessPackageResourceCatalogAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference">AccessPackageResourceCatalogAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginIdInput">resourceOriginIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginSystemInput">resourceOriginSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginId">resourceOriginId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginSystem">resourceOriginSystem</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.timeouts"></a>

```java
public AccessPackageResourceCatalogAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference">AccessPackageResourceCatalogAssociationTimeoutsOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceOriginIdInput`<sup>Optional</sup> <a name="resourceOriginIdInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginIdInput"></a>

```java
public java.lang.String getResourceOriginIdInput();
```

- *Type:* java.lang.String

---

##### `resourceOriginSystemInput`<sup>Optional</sup> <a name="resourceOriginSystemInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginSystemInput"></a>

```java
public java.lang.String getResourceOriginSystemInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceOriginId`<sup>Required</sup> <a name="resourceOriginId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginId"></a>

```java
public java.lang.String getResourceOriginId();
```

- *Type:* java.lang.String

---

##### `resourceOriginSystem`<sup>Required</sup> <a name="resourceOriginSystem" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.resourceOriginSystem"></a>

```java
public java.lang.String getResourceOriginSystem();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessPackageResourceCatalogAssociationConfig <a name="AccessPackageResourceCatalogAssociationConfig" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_resource_catalog_association.AccessPackageResourceCatalogAssociationConfig;

AccessPackageResourceCatalogAssociationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .catalogId(java.lang.String)
    .resourceOriginId(java.lang.String)
    .resourceOriginSystem(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(AccessPackageResourceCatalogAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | The unique ID of the access package catalog. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.resourceOriginId">resourceOriginId</a></code> | <code>java.lang.String</code> | The unique identifier of the resource in the origin system. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.resourceOriginSystem">resourceOriginSystem</a></code> | <code>java.lang.String</code> | The type of the resource in the origin system, such as SharePointOnline, AadApplication or AadGroup. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#id AccessPackageResourceCatalogAssociation#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

The unique ID of the access package catalog.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#catalog_id AccessPackageResourceCatalogAssociation#catalog_id}

---

##### `resourceOriginId`<sup>Required</sup> <a name="resourceOriginId" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.resourceOriginId"></a>

```java
public java.lang.String getResourceOriginId();
```

- *Type:* java.lang.String

The unique identifier of the resource in the origin system.

In the case of an Azure AD group, this is the identifier of the group

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#resource_origin_id AccessPackageResourceCatalogAssociation#resource_origin_id}

---

##### `resourceOriginSystem`<sup>Required</sup> <a name="resourceOriginSystem" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.resourceOriginSystem"></a>

```java
public java.lang.String getResourceOriginSystem();
```

- *Type:* java.lang.String

The type of the resource in the origin system, such as SharePointOnline, AadApplication or AadGroup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#resource_origin_system AccessPackageResourceCatalogAssociation#resource_origin_system}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#id AccessPackageResourceCatalogAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationConfig.property.timeouts"></a>

```java
public AccessPackageResourceCatalogAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#timeouts AccessPackageResourceCatalogAssociation#timeouts}

---

### AccessPackageResourceCatalogAssociationTimeouts <a name="AccessPackageResourceCatalogAssociationTimeouts" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_resource_catalog_association.AccessPackageResourceCatalogAssociationTimeouts;

AccessPackageResourceCatalogAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#create AccessPackageResourceCatalogAssociation#create}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#delete AccessPackageResourceCatalogAssociation#delete}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#read AccessPackageResourceCatalogAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#create AccessPackageResourceCatalogAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#delete AccessPackageResourceCatalogAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/access_package_resource_catalog_association#read AccessPackageResourceCatalogAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessPackageResourceCatalogAssociationTimeoutsOutputReference <a name="AccessPackageResourceCatalogAssociationTimeoutsOutputReference" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_resource_catalog_association.AccessPackageResourceCatalogAssociationTimeoutsOutputReference;

new AccessPackageResourceCatalogAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageResourceCatalogAssociation.AccessPackageResourceCatalogAssociationTimeouts">AccessPackageResourceCatalogAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



