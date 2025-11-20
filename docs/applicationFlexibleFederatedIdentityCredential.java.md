# `applicationFlexibleFederatedIdentityCredential` Submodule <a name="`applicationFlexibleFederatedIdentityCredential` Submodule" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationFlexibleFederatedIdentityCredential <a name="ApplicationFlexibleFederatedIdentityCredential" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential azuread_application_flexible_federated_identity_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_flexible_federated_identity_credential.ApplicationFlexibleFederatedIdentityCredential;

ApplicationFlexibleFederatedIdentityCredential.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .audience(java.lang.String)
    .claimsMatchingExpression(java.lang.String)
    .displayName(java.lang.String)
    .issuer(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApplicationFlexibleFederatedIdentityCredentialTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The resource ID of the application for which this flexible federated identity credential should be created. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.audience">audience</a></code> | <code>java.lang.String</code> | The audience that can appear in the external token. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.claimsMatchingExpression">claimsMatchingExpression</a></code> | <code>java.lang.String</code> | The expression to match for claims. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A unique display name for the flexible federated identity credential. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.issuer">issuer</a></code> | <code>java.lang.String</code> | The URL of the external identity provider, which must match the issuer claim of the external token being exchanged. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the flexible federated identity credential. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#id ApplicationFlexibleFederatedIdentityCredential#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

The resource ID of the application for which this flexible federated identity credential should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#application_id ApplicationFlexibleFederatedIdentityCredential#application_id}

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.audience"></a>

- *Type:* java.lang.String

The audience that can appear in the external token.

This specifies what should be accepted in the `aud` claim of incoming tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#audience ApplicationFlexibleFederatedIdentityCredential#audience}

---

##### `claimsMatchingExpression`<sup>Required</sup> <a name="claimsMatchingExpression" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.claimsMatchingExpression"></a>

- *Type:* java.lang.String

The expression to match for claims.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#claims_matching_expression ApplicationFlexibleFederatedIdentityCredential#claims_matching_expression}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A unique display name for the flexible federated identity credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#display_name ApplicationFlexibleFederatedIdentityCredential#display_name}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.issuer"></a>

- *Type:* java.lang.String

The URL of the external identity provider, which must match the issuer claim of the external token being exchanged.

The combination of the values of issuer and subject must be unique on the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#issuer ApplicationFlexibleFederatedIdentityCredential#issuer}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the flexible federated identity credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#description ApplicationFlexibleFederatedIdentityCredential#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#id ApplicationFlexibleFederatedIdentityCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#timeouts ApplicationFlexibleFederatedIdentityCredential#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.putTimeouts"></a>

```java
public void putTimeouts(ApplicationFlexibleFederatedIdentityCredentialTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationFlexibleFederatedIdentityCredential resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_flexible_federated_identity_credential.ApplicationFlexibleFederatedIdentityCredential;

ApplicationFlexibleFederatedIdentityCredential.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_flexible_federated_identity_credential.ApplicationFlexibleFederatedIdentityCredential;

ApplicationFlexibleFederatedIdentityCredential.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_flexible_federated_identity_credential.ApplicationFlexibleFederatedIdentityCredential;

ApplicationFlexibleFederatedIdentityCredential.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_flexible_federated_identity_credential.ApplicationFlexibleFederatedIdentityCredential;

ApplicationFlexibleFederatedIdentityCredential.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApplicationFlexibleFederatedIdentityCredential.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApplicationFlexibleFederatedIdentityCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApplicationFlexibleFederatedIdentityCredential to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApplicationFlexibleFederatedIdentityCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationFlexibleFederatedIdentityCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.credentialId">credentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference">ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.claimsMatchingExpressionInput">claimsMatchingExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.claimsMatchingExpression">claimsMatchingExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentialId`<sup>Required</sup> <a name="credentialId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.credentialId"></a>

```java
public java.lang.String getCredentialId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.timeouts"></a>

```java
public ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference">ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `claimsMatchingExpressionInput`<sup>Optional</sup> <a name="claimsMatchingExpressionInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.claimsMatchingExpressionInput"></a>

```java
public java.lang.String getClaimsMatchingExpressionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.timeoutsInput"></a>

```java
public IResolvable|ApplicationFlexibleFederatedIdentityCredentialTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `claimsMatchingExpression`<sup>Required</sup> <a name="claimsMatchingExpression" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.claimsMatchingExpression"></a>

```java
public java.lang.String getClaimsMatchingExpression();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredential.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationFlexibleFederatedIdentityCredentialConfig <a name="ApplicationFlexibleFederatedIdentityCredentialConfig" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_flexible_federated_identity_credential.ApplicationFlexibleFederatedIdentityCredentialConfig;

ApplicationFlexibleFederatedIdentityCredentialConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .audience(java.lang.String)
    .claimsMatchingExpression(java.lang.String)
    .displayName(java.lang.String)
    .issuer(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApplicationFlexibleFederatedIdentityCredentialTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The resource ID of the application for which this flexible federated identity credential should be created. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.audience">audience</a></code> | <code>java.lang.String</code> | The audience that can appear in the external token. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.claimsMatchingExpression">claimsMatchingExpression</a></code> | <code>java.lang.String</code> | The expression to match for claims. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A unique display name for the flexible federated identity credential. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | The URL of the external identity provider, which must match the issuer claim of the external token being exchanged. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the flexible federated identity credential. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#id ApplicationFlexibleFederatedIdentityCredential#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The resource ID of the application for which this flexible federated identity credential should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#application_id ApplicationFlexibleFederatedIdentityCredential#application_id}

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

The audience that can appear in the external token.

This specifies what should be accepted in the `aud` claim of incoming tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#audience ApplicationFlexibleFederatedIdentityCredential#audience}

---

##### `claimsMatchingExpression`<sup>Required</sup> <a name="claimsMatchingExpression" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.claimsMatchingExpression"></a>

```java
public java.lang.String getClaimsMatchingExpression();
```

- *Type:* java.lang.String

The expression to match for claims.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#claims_matching_expression ApplicationFlexibleFederatedIdentityCredential#claims_matching_expression}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A unique display name for the flexible federated identity credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#display_name ApplicationFlexibleFederatedIdentityCredential#display_name}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

The URL of the external identity provider, which must match the issuer claim of the external token being exchanged.

The combination of the values of issuer and subject must be unique on the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#issuer ApplicationFlexibleFederatedIdentityCredential#issuer}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the flexible federated identity credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#description ApplicationFlexibleFederatedIdentityCredential#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#id ApplicationFlexibleFederatedIdentityCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialConfig.property.timeouts"></a>

```java
public ApplicationFlexibleFederatedIdentityCredentialTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#timeouts ApplicationFlexibleFederatedIdentityCredential#timeouts}

---

### ApplicationFlexibleFederatedIdentityCredentialTimeouts <a name="ApplicationFlexibleFederatedIdentityCredentialTimeouts" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_flexible_federated_identity_credential.ApplicationFlexibleFederatedIdentityCredentialTimeouts;

ApplicationFlexibleFederatedIdentityCredentialTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#create ApplicationFlexibleFederatedIdentityCredential#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#delete ApplicationFlexibleFederatedIdentityCredential#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#read ApplicationFlexibleFederatedIdentityCredential#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#update ApplicationFlexibleFederatedIdentityCredential#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#create ApplicationFlexibleFederatedIdentityCredential#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#delete ApplicationFlexibleFederatedIdentityCredential#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#read ApplicationFlexibleFederatedIdentityCredential#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/application_flexible_federated_identity_credential#update ApplicationFlexibleFederatedIdentityCredential#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference <a name="ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_flexible_federated_identity_credential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference;

new ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationFlexibleFederatedIdentityCredentialTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azuread.applicationFlexibleFederatedIdentityCredential.ApplicationFlexibleFederatedIdentityCredentialTimeouts">ApplicationFlexibleFederatedIdentityCredentialTimeouts</a>

---



