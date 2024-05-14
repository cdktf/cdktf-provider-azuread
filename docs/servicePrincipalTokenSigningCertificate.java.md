# `servicePrincipalTokenSigningCertificate` Submodule <a name="`servicePrincipalTokenSigningCertificate` Submodule" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalTokenSigningCertificate <a name="ServicePrincipalTokenSigningCertificate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate azuread_service_principal_token_signing_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal_token_signing_certificate.ServicePrincipalTokenSigningCertificate;

ServicePrincipalTokenSigningCertificate.Builder.create(Construct scope, java.lang.String id)
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
    .servicePrincipalId(java.lang.String)
//  .displayName(java.lang.String)
//  .endDate(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ServicePrincipalTokenSigningCertificateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.String</code> | The object ID of the service principal for which this certificate should be created. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A friendly name for the certificate. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.endDate">endDate</a></code> | <code>java.lang.String</code> | The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). Default is 3 years from current date. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#id ServicePrincipalTokenSigningCertificate#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.servicePrincipalId"></a>

- *Type:* java.lang.String

The object ID of the service principal for which this certificate should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#service_principal_id ServicePrincipalTokenSigningCertificate#service_principal_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A friendly name for the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#display_name ServicePrincipalTokenSigningCertificate#display_name}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.endDate"></a>

- *Type:* java.lang.String

The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). Default is 3 years from current date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#end_date ServicePrincipalTokenSigningCertificate#end_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#id ServicePrincipalTokenSigningCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#timeouts ServicePrincipalTokenSigningCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.putTimeouts"></a>

```java
public void putTimeouts(ServicePrincipalTokenSigningCertificateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEndDate` <a name="resetEndDate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetEndDate"></a>

```java
public void resetEndDate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicePrincipalTokenSigningCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal_token_signing_certificate.ServicePrincipalTokenSigningCertificate;

ServicePrincipalTokenSigningCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal_token_signing_certificate.ServicePrincipalTokenSigningCertificate;

ServicePrincipalTokenSigningCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal_token_signing_certificate.ServicePrincipalTokenSigningCertificate;

ServicePrincipalTokenSigningCertificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal_token_signing_certificate.ServicePrincipalTokenSigningCertificate;

ServicePrincipalTokenSigningCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServicePrincipalTokenSigningCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServicePrincipalTokenSigningCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServicePrincipalTokenSigningCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServicePrincipalTokenSigningCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipalTokenSigningCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference">ServicePrincipalTokenSigningCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDateInput">endDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDate">endDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeouts"></a>

```java
public ServicePrincipalTokenSigningCertificateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference">ServicePrincipalTokenSigningCertificateTimeoutsOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDateInput"></a>

```java
public java.lang.String getEndDateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalIdInput"></a>

```java
public java.lang.String getServicePrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.servicePrincipalId"></a>

```java
public java.lang.String getServicePrincipalId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalTokenSigningCertificateConfig <a name="ServicePrincipalTokenSigningCertificateConfig" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal_token_signing_certificate.ServicePrincipalTokenSigningCertificateConfig;

ServicePrincipalTokenSigningCertificateConfig.builder()
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
    .servicePrincipalId(java.lang.String)
//  .displayName(java.lang.String)
//  .endDate(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ServicePrincipalTokenSigningCertificateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.String</code> | The object ID of the service principal for which this certificate should be created. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A friendly name for the certificate. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.endDate">endDate</a></code> | <code>java.lang.String</code> | The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). Default is 3 years from current date. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#id ServicePrincipalTokenSigningCertificate#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.servicePrincipalId"></a>

```java
public java.lang.String getServicePrincipalId();
```

- *Type:* java.lang.String

The object ID of the service principal for which this certificate should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#service_principal_id ServicePrincipalTokenSigningCertificate#service_principal_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A friendly name for the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#display_name ServicePrincipalTokenSigningCertificate#display_name}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

The end date until which the certificate is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). Default is 3 years from current date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#end_date ServicePrincipalTokenSigningCertificate#end_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#id ServicePrincipalTokenSigningCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateConfig.property.timeouts"></a>

```java
public ServicePrincipalTokenSigningCertificateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#timeouts ServicePrincipalTokenSigningCertificate#timeouts}

---

### ServicePrincipalTokenSigningCertificateTimeouts <a name="ServicePrincipalTokenSigningCertificateTimeouts" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal_token_signing_certificate.ServicePrincipalTokenSigningCertificateTimeouts;

ServicePrincipalTokenSigningCertificateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#create ServicePrincipalTokenSigningCertificate#create}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#delete ServicePrincipalTokenSigningCertificate#delete}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#read ServicePrincipalTokenSigningCertificate#read}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#update ServicePrincipalTokenSigningCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#create ServicePrincipalTokenSigningCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#delete ServicePrincipalTokenSigningCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#read ServicePrincipalTokenSigningCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.1/docs/resources/service_principal_token_signing_certificate#update ServicePrincipalTokenSigningCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalTokenSigningCertificateTimeoutsOutputReference <a name="ServicePrincipalTokenSigningCertificateTimeoutsOutputReference" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.service_principal_token_signing_certificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference;

new ServicePrincipalTokenSigningCertificateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.servicePrincipalTokenSigningCertificate.ServicePrincipalTokenSigningCertificateTimeouts">ServicePrincipalTokenSigningCertificateTimeouts</a>

---



