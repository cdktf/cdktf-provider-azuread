# `azuread_access_package_catalog`

Refer to the Terraform Registory for docs: [`azuread_access_package_catalog`](https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog).

# `accessPackageCatalog` Submodule <a name="`accessPackageCatalog` Submodule" id="@cdktf/provider-azuread.accessPackageCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessPackageCatalog <a name="AccessPackageCatalog" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog azuread_access_package_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_catalog.AccessPackageCatalog;

AccessPackageCatalog.Builder.create(Construct scope, java.lang.String id)
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
    .description(java.lang.String)
    .displayName(java.lang.String)
//  .externallyVisible(java.lang.Boolean)
//  .externallyVisible(IResolvable)
//  .id(java.lang.String)
//  .published(java.lang.Boolean)
//  .published(IResolvable)
//  .timeouts(AccessPackageCatalogTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the access package catalog. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the access package catalog. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.externallyVisible">externallyVisible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the access packages in this catalog can be requested by users outside the tenant. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#id AccessPackageCatalog#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.published">published</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the access packages in this catalog are available for management. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts">AccessPackageCatalogTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the access package catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#description AccessPackageCatalog#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the access package catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#display_name AccessPackageCatalog#display_name}

---

##### `externallyVisible`<sup>Optional</sup> <a name="externallyVisible" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.externallyVisible"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the access packages in this catalog can be requested by users outside the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#externally_visible AccessPackageCatalog#externally_visible}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#id AccessPackageCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `published`<sup>Optional</sup> <a name="published" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.published"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the access packages in this catalog are available for management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#published AccessPackageCatalog#published}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts">AccessPackageCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#timeouts AccessPackageCatalog#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.resetExternallyVisible">resetExternallyVisible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.resetPublished">resetPublished</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.putTimeouts"></a>

```java
public void putTimeouts(AccessPackageCatalogTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts">AccessPackageCatalogTimeouts</a>

---

##### `resetExternallyVisible` <a name="resetExternallyVisible" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.resetExternallyVisible"></a>

```java
public void resetExternallyVisible()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.resetId"></a>

```java
public void resetId()
```

##### `resetPublished` <a name="resetPublished" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.resetPublished"></a>

```java
public void resetPublished()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_catalog.AccessPackageCatalog;

AccessPackageCatalog.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_catalog.AccessPackageCatalog;

AccessPackageCatalog.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_catalog.AccessPackageCatalog;

AccessPackageCatalog.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference">AccessPackageCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.externallyVisibleInput">externallyVisibleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.publishedInput">publishedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts">AccessPackageCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.externallyVisible">externallyVisible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.published">published</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.timeouts"></a>

```java
public AccessPackageCatalogTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference">AccessPackageCatalogTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `externallyVisibleInput`<sup>Optional</sup> <a name="externallyVisibleInput" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.externallyVisibleInput"></a>

```java
public java.lang.Object getExternallyVisibleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `publishedInput`<sup>Optional</sup> <a name="publishedInput" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.publishedInput"></a>

```java
public java.lang.Object getPublishedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts">AccessPackageCatalogTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `externallyVisible`<sup>Required</sup> <a name="externallyVisible" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.externallyVisible"></a>

```java
public java.lang.Object getExternallyVisible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.published"></a>

```java
public java.lang.Object getPublished();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalog.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessPackageCatalogConfig <a name="AccessPackageCatalogConfig" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_catalog.AccessPackageCatalogConfig;

AccessPackageCatalogConfig.builder()
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
    .description(java.lang.String)
    .displayName(java.lang.String)
//  .externallyVisible(java.lang.Boolean)
//  .externallyVisible(IResolvable)
//  .id(java.lang.String)
//  .published(java.lang.Boolean)
//  .published(IResolvable)
//  .timeouts(AccessPackageCatalogTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the access package catalog. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the access package catalog. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.externallyVisible">externallyVisible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the access packages in this catalog can be requested by users outside the tenant. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#id AccessPackageCatalog#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.published">published</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the access packages in this catalog are available for management. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts">AccessPackageCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the access package catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#description AccessPackageCatalog#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the access package catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#display_name AccessPackageCatalog#display_name}

---

##### `externallyVisible`<sup>Optional</sup> <a name="externallyVisible" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.externallyVisible"></a>

```java
public java.lang.Object getExternallyVisible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the access packages in this catalog can be requested by users outside the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#externally_visible AccessPackageCatalog#externally_visible}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#id AccessPackageCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `published`<sup>Optional</sup> <a name="published" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.published"></a>

```java
public java.lang.Object getPublished();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the access packages in this catalog are available for management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#published AccessPackageCatalog#published}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogConfig.property.timeouts"></a>

```java
public AccessPackageCatalogTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts">AccessPackageCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#timeouts AccessPackageCatalog#timeouts}

---

### AccessPackageCatalogTimeouts <a name="AccessPackageCatalogTimeouts" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_catalog.AccessPackageCatalogTimeouts;

AccessPackageCatalogTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#create AccessPackageCatalog#create}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#delete AccessPackageCatalog#delete}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#read AccessPackageCatalog#read}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#update AccessPackageCatalog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#create AccessPackageCatalog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#delete AccessPackageCatalog#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#read AccessPackageCatalog#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/access_package_catalog#update AccessPackageCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessPackageCatalogTimeoutsOutputReference <a name="AccessPackageCatalogTimeoutsOutputReference" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.access_package_catalog.AccessPackageCatalogTimeoutsOutputReference;

new AccessPackageCatalogTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts">AccessPackageCatalogTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.accessPackageCatalog.AccessPackageCatalogTimeouts">AccessPackageCatalogTimeouts</a>

---



