# `data_azuread_administrative_unit`

Refer to the Terraform Registory for docs: [`data_azuread_administrative_unit`](https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit).

# `dataAzureadAdministrativeUnit` Submodule <a name="`dataAzureadAdministrativeUnit` Submodule" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadAdministrativeUnit <a name="DataAzureadAdministrativeUnit" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit azuread_administrative_unit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_administrative_unit.DataAzureadAdministrativeUnit;

DataAzureadAdministrativeUnit.Builder.create(Construct scope, java.lang.String id)
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
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .objectId(java.lang.String)
//  .timeouts(DataAzureadAdministrativeUnitTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#id DataAzureadAdministrativeUnit#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | The object ID of the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#display_name DataAzureadAdministrativeUnit#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#id DataAzureadAdministrativeUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

The object ID of the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#object_id DataAzureadAdministrativeUnit#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#timeouts DataAzureadAdministrativeUnit#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetObjectId">resetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.putTimeouts"></a>

```java
public void putTimeouts(DataAzureadAdministrativeUnitTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetId"></a>

```java
public void resetId()
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetObjectId"></a>

```java
public void resetObjectId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzureadAdministrativeUnit resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_administrative_unit.DataAzureadAdministrativeUnit;

DataAzureadAdministrativeUnit.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_administrative_unit.DataAzureadAdministrativeUnit;

DataAzureadAdministrativeUnit.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_administrative_unit.DataAzureadAdministrativeUnit;

DataAzureadAdministrativeUnit.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_administrative_unit.DataAzureadAdministrativeUnit;

DataAzureadAdministrativeUnit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzureadAdministrativeUnit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzureadAdministrativeUnit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzureadAdministrativeUnit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzureadAdministrativeUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadAdministrativeUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference">DataAzureadAdministrativeUnitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.timeouts"></a>

```java
public DataAzureadAdministrativeUnitTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference">DataAzureadAdministrativeUnitTimeoutsOutputReference</a>

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadAdministrativeUnitConfig <a name="DataAzureadAdministrativeUnitConfig" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_administrative_unit.DataAzureadAdministrativeUnitConfig;

DataAzureadAdministrativeUnitConfig.builder()
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
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .objectId(java.lang.String)
//  .timeouts(DataAzureadAdministrativeUnitTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#id DataAzureadAdministrativeUnit#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | The object ID of the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#display_name DataAzureadAdministrativeUnit#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#id DataAzureadAdministrativeUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

The object ID of the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#object_id DataAzureadAdministrativeUnit#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.timeouts"></a>

```java
public DataAzureadAdministrativeUnitTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#timeouts DataAzureadAdministrativeUnit#timeouts}

---

### DataAzureadAdministrativeUnitTimeouts <a name="DataAzureadAdministrativeUnitTimeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_administrative_unit.DataAzureadAdministrativeUnitTimeouts;

DataAzureadAdministrativeUnitTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#create DataAzureadAdministrativeUnit#create}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#delete DataAzureadAdministrativeUnit#delete}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#read DataAzureadAdministrativeUnit#read}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#update DataAzureadAdministrativeUnit#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#create DataAzureadAdministrativeUnit#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#delete DataAzureadAdministrativeUnit#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#read DataAzureadAdministrativeUnit#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/data-sources/administrative_unit#update DataAzureadAdministrativeUnit#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadAdministrativeUnitTimeoutsOutputReference <a name="DataAzureadAdministrativeUnitTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_administrative_unit.DataAzureadAdministrativeUnitTimeoutsOutputReference;

new DataAzureadAdministrativeUnitTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a>

---



