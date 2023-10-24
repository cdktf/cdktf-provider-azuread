# `data_azuread_service_principal`

Refer to the Terraform Registory for docs: [`data_azuread_service_principal`](https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal).

# `dataAzureadServicePrincipal` Submodule <a name="`dataAzureadServicePrincipal` Submodule" id="@cdktf/provider-azuread.dataAzureadServicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadServicePrincipal <a name="DataAzureadServicePrincipal" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal azuread_service_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipal;

DataAzureadServicePrincipal.Builder.create(Construct scope, java.lang.String id)
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
//  .applicationId(java.lang.String)
//  .clientId(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .objectId(java.lang.String)
//  .timeouts(DataAzureadServicePrincipalTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The application ID (client ID) of the application associated with this service principal. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID of the application associated with this service principal. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the application associated with this service principal. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#id DataAzureadServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | The object ID of the service principal. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

The application ID (client ID) of the application associated with this service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#application_id DataAzureadServicePrincipal#application_id}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

The client ID of the application associated with this service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#client_id DataAzureadServicePrincipal#client_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the application associated with this service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#display_name DataAzureadServicePrincipal#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#id DataAzureadServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

The object ID of the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#object_id DataAzureadServicePrincipal#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#timeouts DataAzureadServicePrincipal#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetObjectId">resetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.putTimeouts"></a>

```java
public void putTimeouts(DataAzureadServicePrincipalTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a>

---

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetApplicationId"></a>

```java
public void resetApplicationId()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetId"></a>

```java
public void resetId()
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetObjectId"></a>

```java
public void resetObjectId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzureadServicePrincipal resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipal;

DataAzureadServicePrincipal.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipal;

DataAzureadServicePrincipal.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipal;

DataAzureadServicePrincipal.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipal;

DataAzureadServicePrincipal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzureadServicePrincipal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzureadServicePrincipal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzureadServicePrincipal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzureadServicePrincipal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadServicePrincipal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.accountEnabled">accountEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.alternativeNames">alternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.applicationTenantId">applicationTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoleAssignmentRequired">appRoleAssignmentRequired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoleIds">appRoleIds</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoles">appRoles</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList">DataAzureadServicePrincipalAppRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.features">features</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList">DataAzureadServicePrincipalFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.featureTags">featureTags</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList">DataAzureadServicePrincipalFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.homepageUrl">homepageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.loginUrl">loginUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.logoutUrl">logoutUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.notificationEmailAddresses">notificationEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.oauth2PermissionScopeIds">oauth2PermissionScopeIds</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.oauth2PermissionScopes">oauth2PermissionScopes</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList">DataAzureadServicePrincipalOauth2PermissionScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.preferredSingleSignOnMode">preferredSingleSignOnMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.samlMetadataUrl">samlMetadataUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.samlSingleSignOn">samlSingleSignOn</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList">DataAzureadServicePrincipalSamlSingleSignOnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.servicePrincipalNames">servicePrincipalNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.signInAudience">signInAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference">DataAzureadServicePrincipalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `accountEnabled`<sup>Required</sup> <a name="accountEnabled" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.accountEnabled"></a>

```java
public IResolvable getAccountEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `alternativeNames`<sup>Required</sup> <a name="alternativeNames" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.alternativeNames"></a>

```java
public java.util.List<java.lang.String> getAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `applicationTenantId`<sup>Required</sup> <a name="applicationTenantId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.applicationTenantId"></a>

```java
public java.lang.String getApplicationTenantId();
```

- *Type:* java.lang.String

---

##### `appRoleAssignmentRequired`<sup>Required</sup> <a name="appRoleAssignmentRequired" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoleAssignmentRequired"></a>

```java
public IResolvable getAppRoleAssignmentRequired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `appRoleIds`<sup>Required</sup> <a name="appRoleIds" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoleIds"></a>

```java
public StringMap getAppRoleIds();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `appRoles`<sup>Required</sup> <a name="appRoles" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.appRoles"></a>

```java
public DataAzureadServicePrincipalAppRolesList getAppRoles();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList">DataAzureadServicePrincipalAppRolesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.features"></a>

```java
public DataAzureadServicePrincipalFeaturesList getFeatures();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList">DataAzureadServicePrincipalFeaturesList</a>

---

##### `featureTags`<sup>Required</sup> <a name="featureTags" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.featureTags"></a>

```java
public DataAzureadServicePrincipalFeatureTagsList getFeatureTags();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList">DataAzureadServicePrincipalFeatureTagsList</a>

---

##### `homepageUrl`<sup>Required</sup> <a name="homepageUrl" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.homepageUrl"></a>

```java
public java.lang.String getHomepageUrl();
```

- *Type:* java.lang.String

---

##### `loginUrl`<sup>Required</sup> <a name="loginUrl" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.loginUrl"></a>

```java
public java.lang.String getLoginUrl();
```

- *Type:* java.lang.String

---

##### `logoutUrl`<sup>Required</sup> <a name="logoutUrl" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.logoutUrl"></a>

```java
public java.lang.String getLogoutUrl();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

##### `notificationEmailAddresses`<sup>Required</sup> <a name="notificationEmailAddresses" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.notificationEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getNotificationEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oauth2PermissionScopeIds`<sup>Required</sup> <a name="oauth2PermissionScopeIds" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.oauth2PermissionScopeIds"></a>

```java
public StringMap getOauth2PermissionScopeIds();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `oauth2PermissionScopes`<sup>Required</sup> <a name="oauth2PermissionScopes" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.oauth2PermissionScopes"></a>

```java
public DataAzureadServicePrincipalOauth2PermissionScopesList getOauth2PermissionScopes();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList">DataAzureadServicePrincipalOauth2PermissionScopesList</a>

---

##### `preferredSingleSignOnMode`<sup>Required</sup> <a name="preferredSingleSignOnMode" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.preferredSingleSignOnMode"></a>

```java
public java.lang.String getPreferredSingleSignOnMode();
```

- *Type:* java.lang.String

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `samlMetadataUrl`<sup>Required</sup> <a name="samlMetadataUrl" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.samlMetadataUrl"></a>

```java
public java.lang.String getSamlMetadataUrl();
```

- *Type:* java.lang.String

---

##### `samlSingleSignOn`<sup>Required</sup> <a name="samlSingleSignOn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.samlSingleSignOn"></a>

```java
public DataAzureadServicePrincipalSamlSingleSignOnList getSamlSingleSignOn();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList">DataAzureadServicePrincipalSamlSingleSignOnList</a>

---

##### `servicePrincipalNames`<sup>Required</sup> <a name="servicePrincipalNames" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.servicePrincipalNames"></a>

```java
public java.util.List<java.lang.String> getServicePrincipalNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `signInAudience`<sup>Required</sup> <a name="signInAudience" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.signInAudience"></a>

```java
public java.lang.String getSignInAudience();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.timeouts"></a>

```java
public DataAzureadServicePrincipalTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference">DataAzureadServicePrincipalTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipal.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadServicePrincipalAppRoles <a name="DataAzureadServicePrincipalAppRoles" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRoles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalAppRoles;

DataAzureadServicePrincipalAppRoles.builder()
    .build();
```


### DataAzureadServicePrincipalConfig <a name="DataAzureadServicePrincipalConfig" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalConfig;

DataAzureadServicePrincipalConfig.builder()
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
//  .applicationId(java.lang.String)
//  .clientId(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .objectId(java.lang.String)
//  .timeouts(DataAzureadServicePrincipalTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The application ID (client ID) of the application associated with this service principal. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID of the application associated with this service principal. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the application associated with this service principal. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#id DataAzureadServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | The object ID of the service principal. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The application ID (client ID) of the application associated with this service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#application_id DataAzureadServicePrincipal#application_id}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID of the application associated with this service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#client_id DataAzureadServicePrincipal#client_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the application associated with this service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#display_name DataAzureadServicePrincipal#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#id DataAzureadServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

The object ID of the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#object_id DataAzureadServicePrincipal#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalConfig.property.timeouts"></a>

```java
public DataAzureadServicePrincipalTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#timeouts DataAzureadServicePrincipal#timeouts}

---

### DataAzureadServicePrincipalFeatures <a name="DataAzureadServicePrincipalFeatures" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalFeatures;

DataAzureadServicePrincipalFeatures.builder()
    .build();
```


### DataAzureadServicePrincipalFeatureTags <a name="DataAzureadServicePrincipalFeatureTags" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalFeatureTags;

DataAzureadServicePrincipalFeatureTags.builder()
    .build();
```


### DataAzureadServicePrincipalOauth2PermissionScopes <a name="DataAzureadServicePrincipalOauth2PermissionScopes" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalOauth2PermissionScopes;

DataAzureadServicePrincipalOauth2PermissionScopes.builder()
    .build();
```


### DataAzureadServicePrincipalSamlSingleSignOn <a name="DataAzureadServicePrincipalSamlSingleSignOn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalSamlSingleSignOn;

DataAzureadServicePrincipalSamlSingleSignOn.builder()
    .build();
```


### DataAzureadServicePrincipalTimeouts <a name="DataAzureadServicePrincipalTimeouts" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalTimeouts;

DataAzureadServicePrincipalTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#read DataAzureadServicePrincipal#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/data-sources/service_principal#read DataAzureadServicePrincipal#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadServicePrincipalAppRolesList <a name="DataAzureadServicePrincipalAppRolesList" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalAppRolesList;

new DataAzureadServicePrincipalAppRolesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.get"></a>

```java
public DataAzureadServicePrincipalAppRolesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzureadServicePrincipalAppRolesOutputReference <a name="DataAzureadServicePrincipalAppRolesOutputReference" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalAppRolesOutputReference;

new DataAzureadServicePrincipalAppRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.allowedMemberTypes">allowedMemberTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRoles">DataAzureadServicePrincipalAppRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedMemberTypes`<sup>Required</sup> <a name="allowedMemberTypes" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.allowedMemberTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedMemberTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRolesOutputReference.property.internalValue"></a>

```java
public DataAzureadServicePrincipalAppRoles getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalAppRoles">DataAzureadServicePrincipalAppRoles</a>

---


### DataAzureadServicePrincipalFeaturesList <a name="DataAzureadServicePrincipalFeaturesList" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalFeaturesList;

new DataAzureadServicePrincipalFeaturesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.get"></a>

```java
public DataAzureadServicePrincipalFeaturesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzureadServicePrincipalFeaturesOutputReference <a name="DataAzureadServicePrincipalFeaturesOutputReference" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalFeaturesOutputReference;

new DataAzureadServicePrincipalFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.customSingleSignOnApp">customSingleSignOnApp</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.enterpriseApplication">enterpriseApplication</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.galleryApplication">galleryApplication</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.visibleToUsers">visibleToUsers</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatures">DataAzureadServicePrincipalFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customSingleSignOnApp`<sup>Required</sup> <a name="customSingleSignOnApp" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.customSingleSignOnApp"></a>

```java
public IResolvable getCustomSingleSignOnApp();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enterpriseApplication`<sup>Required</sup> <a name="enterpriseApplication" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.enterpriseApplication"></a>

```java
public IResolvable getEnterpriseApplication();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `galleryApplication`<sup>Required</sup> <a name="galleryApplication" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.galleryApplication"></a>

```java
public IResolvable getGalleryApplication();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `visibleToUsers`<sup>Required</sup> <a name="visibleToUsers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.visibleToUsers"></a>

```java
public IResolvable getVisibleToUsers();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeaturesOutputReference.property.internalValue"></a>

```java
public DataAzureadServicePrincipalFeatures getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatures">DataAzureadServicePrincipalFeatures</a>

---


### DataAzureadServicePrincipalFeatureTagsList <a name="DataAzureadServicePrincipalFeatureTagsList" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalFeatureTagsList;

new DataAzureadServicePrincipalFeatureTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.get"></a>

```java
public DataAzureadServicePrincipalFeatureTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzureadServicePrincipalFeatureTagsOutputReference <a name="DataAzureadServicePrincipalFeatureTagsOutputReference" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalFeatureTagsOutputReference;

new DataAzureadServicePrincipalFeatureTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.customSingleSignOn">customSingleSignOn</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.enterprise">enterprise</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.gallery">gallery</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.hide">hide</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTags">DataAzureadServicePrincipalFeatureTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customSingleSignOn`<sup>Required</sup> <a name="customSingleSignOn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.customSingleSignOn"></a>

```java
public IResolvable getCustomSingleSignOn();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enterprise`<sup>Required</sup> <a name="enterprise" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.enterprise"></a>

```java
public IResolvable getEnterprise();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `gallery`<sup>Required</sup> <a name="gallery" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.gallery"></a>

```java
public IResolvable getGallery();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `hide`<sup>Required</sup> <a name="hide" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.hide"></a>

```java
public IResolvable getHide();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTagsOutputReference.property.internalValue"></a>

```java
public DataAzureadServicePrincipalFeatureTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalFeatureTags">DataAzureadServicePrincipalFeatureTags</a>

---


### DataAzureadServicePrincipalOauth2PermissionScopesList <a name="DataAzureadServicePrincipalOauth2PermissionScopesList" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalOauth2PermissionScopesList;

new DataAzureadServicePrincipalOauth2PermissionScopesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.get"></a>

```java
public DataAzureadServicePrincipalOauth2PermissionScopesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzureadServicePrincipalOauth2PermissionScopesOutputReference <a name="DataAzureadServicePrincipalOauth2PermissionScopesOutputReference" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference;

new DataAzureadServicePrincipalOauth2PermissionScopesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDescription">adminConsentDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDisplayName">adminConsentDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDescription">userConsentDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDisplayName">userConsentDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopes">DataAzureadServicePrincipalOauth2PermissionScopes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminConsentDescription`<sup>Required</sup> <a name="adminConsentDescription" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDescription"></a>

```java
public java.lang.String getAdminConsentDescription();
```

- *Type:* java.lang.String

---

##### `adminConsentDisplayName`<sup>Required</sup> <a name="adminConsentDisplayName" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDisplayName"></a>

```java
public java.lang.String getAdminConsentDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userConsentDescription`<sup>Required</sup> <a name="userConsentDescription" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDescription"></a>

```java
public java.lang.String getUserConsentDescription();
```

- *Type:* java.lang.String

---

##### `userConsentDisplayName`<sup>Required</sup> <a name="userConsentDisplayName" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDisplayName"></a>

```java
public java.lang.String getUserConsentDisplayName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopesOutputReference.property.internalValue"></a>

```java
public DataAzureadServicePrincipalOauth2PermissionScopes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalOauth2PermissionScopes">DataAzureadServicePrincipalOauth2PermissionScopes</a>

---


### DataAzureadServicePrincipalSamlSingleSignOnList <a name="DataAzureadServicePrincipalSamlSingleSignOnList" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalSamlSingleSignOnList;

new DataAzureadServicePrincipalSamlSingleSignOnList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.get"></a>

```java
public DataAzureadServicePrincipalSamlSingleSignOnOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzureadServicePrincipalSamlSingleSignOnOutputReference <a name="DataAzureadServicePrincipalSamlSingleSignOnOutputReference" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference;

new DataAzureadServicePrincipalSamlSingleSignOnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.relayState">relayState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOn">DataAzureadServicePrincipalSamlSingleSignOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `relayState`<sup>Required</sup> <a name="relayState" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.relayState"></a>

```java
public java.lang.String getRelayState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOnOutputReference.property.internalValue"></a>

```java
public DataAzureadServicePrincipalSamlSingleSignOn getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalSamlSingleSignOn">DataAzureadServicePrincipalSamlSingleSignOn</a>

---


### DataAzureadServicePrincipalTimeoutsOutputReference <a name="DataAzureadServicePrincipalTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_service_principal.DataAzureadServicePrincipalTimeoutsOutputReference;

new DataAzureadServicePrincipalTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadServicePrincipal.DataAzureadServicePrincipalTimeouts">DataAzureadServicePrincipalTimeouts</a>

---



