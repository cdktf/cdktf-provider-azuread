# `azuread_application_federated_identity_credential`

Refer to the Terraform Registory for docs: [`azuread_application_federated_identity_credential`](https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential).

# `applicationFederatedIdentityCredential` Submodule <a name="`applicationFederatedIdentityCredential` Submodule" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationFederatedIdentityCredential <a name="ApplicationFederatedIdentityCredential" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential azuread_application_federated_identity_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_federated_identity_credential.ApplicationFederatedIdentityCredential;

ApplicationFederatedIdentityCredential.Builder.create(Construct scope, java.lang.String id)
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
    .applicationObjectId(java.lang.String)
    .audiences(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .issuer(java.lang.String)
    .subject(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApplicationFederatedIdentityCredentialTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.applicationObjectId">applicationObjectId</a></code> | <code>java.lang.String</code> | The object ID of the application for which this federated identity credential should be created. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | List of audiences that can appear in the external token. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A unique display name for the federated identity credential. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.issuer">issuer</a></code> | <code>java.lang.String</code> | The URL of the external identity provider, which must match the issuer claim of the external token being exchanged. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.subject">subject</a></code> | <code>java.lang.String</code> | The identifier of the external software workload within the external identity provider. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the federated identity credential. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#id ApplicationFederatedIdentityCredential#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationObjectId`<sup>Required</sup> <a name="applicationObjectId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.applicationObjectId"></a>

- *Type:* java.lang.String

The object ID of the application for which this federated identity credential should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#application_object_id ApplicationFederatedIdentityCredential#application_object_id}

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.audiences"></a>

- *Type:* java.util.List<java.lang.String>

List of audiences that can appear in the external token.

This specifies what should be accepted in the `aud` claim of incoming tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#audiences ApplicationFederatedIdentityCredential#audiences}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A unique display name for the federated identity credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#display_name ApplicationFederatedIdentityCredential#display_name}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.issuer"></a>

- *Type:* java.lang.String

The URL of the external identity provider, which must match the issuer claim of the external token being exchanged.

The combination of the values of issuer and subject must be unique on the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#issuer ApplicationFederatedIdentityCredential#issuer}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.subject"></a>

- *Type:* java.lang.String

The identifier of the external software workload within the external identity provider.

The combination of issuer and subject must be unique on the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#subject ApplicationFederatedIdentityCredential#subject}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the federated identity credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#description ApplicationFederatedIdentityCredential#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#id ApplicationFederatedIdentityCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#timeouts ApplicationFederatedIdentityCredential#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.putTimeouts"></a>

```java
public void putTimeouts(ApplicationFederatedIdentityCredentialTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_federated_identity_credential.ApplicationFederatedIdentityCredential;

ApplicationFederatedIdentityCredential.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_federated_identity_credential.ApplicationFederatedIdentityCredential;

ApplicationFederatedIdentityCredential.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_federated_identity_credential.ApplicationFederatedIdentityCredential;

ApplicationFederatedIdentityCredential.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.credentialId">credentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference">ApplicationFederatedIdentityCredentialTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.applicationObjectIdInput">applicationObjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.audiencesInput">audiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.subjectInput">subjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.applicationObjectId">applicationObjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentialId`<sup>Required</sup> <a name="credentialId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.credentialId"></a>

```java
public java.lang.String getCredentialId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.timeouts"></a>

```java
public ApplicationFederatedIdentityCredentialTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference">ApplicationFederatedIdentityCredentialTimeoutsOutputReference</a>

---

##### `applicationObjectIdInput`<sup>Optional</sup> <a name="applicationObjectIdInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.applicationObjectIdInput"></a>

```java
public java.lang.String getApplicationObjectIdInput();
```

- *Type:* java.lang.String

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.audiencesInput"></a>

```java
public java.util.List<java.lang.String> getAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.subjectInput"></a>

```java
public java.lang.String getSubjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a>

---

##### `applicationObjectId`<sup>Required</sup> <a name="applicationObjectId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.applicationObjectId"></a>

```java
public java.lang.String getApplicationObjectId();
```

- *Type:* java.lang.String

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredential.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationFederatedIdentityCredentialConfig <a name="ApplicationFederatedIdentityCredentialConfig" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_federated_identity_credential.ApplicationFederatedIdentityCredentialConfig;

ApplicationFederatedIdentityCredentialConfig.builder()
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
    .applicationObjectId(java.lang.String)
    .audiences(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .issuer(java.lang.String)
    .subject(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApplicationFederatedIdentityCredentialTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.applicationObjectId">applicationObjectId</a></code> | <code>java.lang.String</code> | The object ID of the application for which this federated identity credential should be created. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | List of audiences that can appear in the external token. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A unique display name for the federated identity credential. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | The URL of the external identity provider, which must match the issuer claim of the external token being exchanged. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.subject">subject</a></code> | <code>java.lang.String</code> | The identifier of the external software workload within the external identity provider. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the federated identity credential. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#id ApplicationFederatedIdentityCredential#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationObjectId`<sup>Required</sup> <a name="applicationObjectId" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.applicationObjectId"></a>

```java
public java.lang.String getApplicationObjectId();
```

- *Type:* java.lang.String

The object ID of the application for which this federated identity credential should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#application_object_id ApplicationFederatedIdentityCredential#application_object_id}

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

List of audiences that can appear in the external token.

This specifies what should be accepted in the `aud` claim of incoming tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#audiences ApplicationFederatedIdentityCredential#audiences}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A unique display name for the federated identity credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#display_name ApplicationFederatedIdentityCredential#display_name}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

The URL of the external identity provider, which must match the issuer claim of the external token being exchanged.

The combination of the values of issuer and subject must be unique on the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#issuer ApplicationFederatedIdentityCredential#issuer}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

The identifier of the external software workload within the external identity provider.

The combination of issuer and subject must be unique on the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#subject ApplicationFederatedIdentityCredential#subject}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the federated identity credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#description ApplicationFederatedIdentityCredential#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#id ApplicationFederatedIdentityCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialConfig.property.timeouts"></a>

```java
public ApplicationFederatedIdentityCredentialTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#timeouts ApplicationFederatedIdentityCredential#timeouts}

---

### ApplicationFederatedIdentityCredentialTimeouts <a name="ApplicationFederatedIdentityCredentialTimeouts" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_federated_identity_credential.ApplicationFederatedIdentityCredentialTimeouts;

ApplicationFederatedIdentityCredentialTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#create ApplicationFederatedIdentityCredential#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#delete ApplicationFederatedIdentityCredential#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#read ApplicationFederatedIdentityCredential#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#update ApplicationFederatedIdentityCredential#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#create ApplicationFederatedIdentityCredential#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#delete ApplicationFederatedIdentityCredential#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#read ApplicationFederatedIdentityCredential#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/application_federated_identity_credential#update ApplicationFederatedIdentityCredential#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationFederatedIdentityCredentialTimeoutsOutputReference <a name="ApplicationFederatedIdentityCredentialTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_federated_identity_credential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference;

new ApplicationFederatedIdentityCredentialTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.applicationFederatedIdentityCredential.ApplicationFederatedIdentityCredentialTimeouts">ApplicationFederatedIdentityCredentialTimeouts</a>

---



