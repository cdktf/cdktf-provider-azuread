# `dataAzureadUser` Submodule <a name="`dataAzureadUser` Submodule" id="@cdktf/provider-azuread.dataAzureadUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadUser <a name="DataAzureadUser" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user azuread_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_user.DataAzureadUser;

DataAzureadUser.Builder.create(Construct scope, java.lang.String id)
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
//  .employeeId(java.lang.String)
//  .id(java.lang.String)
//  .mail(java.lang.String)
//  .mailNickname(java.lang.String)
//  .objectId(java.lang.String)
//  .timeouts(DataAzureadUserTimeouts)
//  .userPrincipalName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.employeeId">employeeId</a></code> | <code>java.lang.String</code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#id DataAzureadUser#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.mail">mail</a></code> | <code>java.lang.String</code> | The SMTP address for the user. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.mailNickname">mailNickname</a></code> | <code>java.lang.String</code> | The email alias of the user. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | The object ID of the user. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.userPrincipalName">userPrincipalName</a></code> | <code>java.lang.String</code> | The user principal name (UPN) of the user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `employeeId`<sup>Optional</sup> <a name="employeeId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.employeeId"></a>

- *Type:* java.lang.String

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#employee_id DataAzureadUser#employee_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#id DataAzureadUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mail`<sup>Optional</sup> <a name="mail" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.mail"></a>

- *Type:* java.lang.String

The SMTP address for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#mail DataAzureadUser#mail}

---

##### `mailNickname`<sup>Optional</sup> <a name="mailNickname" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.mailNickname"></a>

- *Type:* java.lang.String

The email alias of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#mail_nickname DataAzureadUser#mail_nickname}

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

The object ID of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#object_id DataAzureadUser#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#timeouts DataAzureadUser#timeouts}

---

##### `userPrincipalName`<sup>Optional</sup> <a name="userPrincipalName" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.Initializer.parameter.userPrincipalName"></a>

- *Type:* java.lang.String

The user principal name (UPN) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#user_principal_name DataAzureadUser#user_principal_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetEmployeeId">resetEmployeeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetMail">resetMail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetMailNickname">resetMailNickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetObjectId">resetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetUserPrincipalName">resetUserPrincipalName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.putTimeouts"></a>

```java
public void putTimeouts(DataAzureadUserTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a>

---

##### `resetEmployeeId` <a name="resetEmployeeId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetEmployeeId"></a>

```java
public void resetEmployeeId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetId"></a>

```java
public void resetId()
```

##### `resetMail` <a name="resetMail" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetMail"></a>

```java
public void resetMail()
```

##### `resetMailNickname` <a name="resetMailNickname" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetMailNickname"></a>

```java
public void resetMailNickname()
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetObjectId"></a>

```java
public void resetObjectId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserPrincipalName` <a name="resetUserPrincipalName" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.resetUserPrincipalName"></a>

```java
public void resetUserPrincipalName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzureadUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_user.DataAzureadUser;

DataAzureadUser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_user.DataAzureadUser;

DataAzureadUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_user.DataAzureadUser;

DataAzureadUser.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_user.DataAzureadUser;

DataAzureadUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzureadUser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzureadUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzureadUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzureadUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.accountEnabled">accountEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.ageGroup">ageGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.businessPhones">businessPhones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.consentProvidedForMinor">consentProvidedForMinor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.costCenter">costCenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.creationType">creationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.department">department</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.division">division</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeHireDate">employeeHireDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeType">employeeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.externalUserState">externalUserState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.faxNumber">faxNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.givenName">givenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.imAddresses">imAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.managerId">managerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mobilePhone">mobilePhone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.officeLocation">officeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesDistinguishedName">onpremisesDistinguishedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesDomainName">onpremisesDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesImmutableId">onpremisesImmutableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSamAccountName">onpremisesSamAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSecurityIdentifier">onpremisesSecurityIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSyncEnabled">onpremisesSyncEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesUserPrincipalName">onpremisesUserPrincipalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.otherMails">otherMails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.proxyAddresses">proxyAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.showInAddressList">showInAddressList</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.surname">surname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference">DataAzureadUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.usageLocation">usageLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.userType">userType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeIdInput">employeeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailInput">mailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailNicknameInput">mailNicknameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.userPrincipalNameInput">userPrincipalNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeId">employeeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mail">mail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailNickname">mailNickname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.userPrincipalName">userPrincipalName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `accountEnabled`<sup>Required</sup> <a name="accountEnabled" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.accountEnabled"></a>

```java
public IResolvable getAccountEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ageGroup`<sup>Required</sup> <a name="ageGroup" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.ageGroup"></a>

```java
public java.lang.String getAgeGroup();
```

- *Type:* java.lang.String

---

##### `businessPhones`<sup>Required</sup> <a name="businessPhones" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.businessPhones"></a>

```java
public java.util.List<java.lang.String> getBusinessPhones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `consentProvidedForMinor`<sup>Required</sup> <a name="consentProvidedForMinor" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.consentProvidedForMinor"></a>

```java
public java.lang.String getConsentProvidedForMinor();
```

- *Type:* java.lang.String

---

##### `costCenter`<sup>Required</sup> <a name="costCenter" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.costCenter"></a>

```java
public java.lang.String getCostCenter();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.creationType"></a>

```java
public java.lang.String getCreationType();
```

- *Type:* java.lang.String

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.department"></a>

```java
public java.lang.String getDepartment();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.division"></a>

```java
public java.lang.String getDivision();
```

- *Type:* java.lang.String

---

##### `employeeHireDate`<sup>Required</sup> <a name="employeeHireDate" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeHireDate"></a>

```java
public java.lang.String getEmployeeHireDate();
```

- *Type:* java.lang.String

---

##### `employeeType`<sup>Required</sup> <a name="employeeType" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeType"></a>

```java
public java.lang.String getEmployeeType();
```

- *Type:* java.lang.String

---

##### `externalUserState`<sup>Required</sup> <a name="externalUserState" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.externalUserState"></a>

```java
public java.lang.String getExternalUserState();
```

- *Type:* java.lang.String

---

##### `faxNumber`<sup>Required</sup> <a name="faxNumber" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.faxNumber"></a>

```java
public java.lang.String getFaxNumber();
```

- *Type:* java.lang.String

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

---

##### `imAddresses`<sup>Required</sup> <a name="imAddresses" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.imAddresses"></a>

```java
public java.util.List<java.lang.String> getImAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

---

##### `managerId`<sup>Required</sup> <a name="managerId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.managerId"></a>

```java
public java.lang.String getManagerId();
```

- *Type:* java.lang.String

---

##### `mobilePhone`<sup>Required</sup> <a name="mobilePhone" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mobilePhone"></a>

```java
public java.lang.String getMobilePhone();
```

- *Type:* java.lang.String

---

##### `officeLocation`<sup>Required</sup> <a name="officeLocation" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.officeLocation"></a>

```java
public java.lang.String getOfficeLocation();
```

- *Type:* java.lang.String

---

##### `onpremisesDistinguishedName`<sup>Required</sup> <a name="onpremisesDistinguishedName" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesDistinguishedName"></a>

```java
public java.lang.String getOnpremisesDistinguishedName();
```

- *Type:* java.lang.String

---

##### `onpremisesDomainName`<sup>Required</sup> <a name="onpremisesDomainName" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesDomainName"></a>

```java
public java.lang.String getOnpremisesDomainName();
```

- *Type:* java.lang.String

---

##### `onpremisesImmutableId`<sup>Required</sup> <a name="onpremisesImmutableId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesImmutableId"></a>

```java
public java.lang.String getOnpremisesImmutableId();
```

- *Type:* java.lang.String

---

##### `onpremisesSamAccountName`<sup>Required</sup> <a name="onpremisesSamAccountName" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSamAccountName"></a>

```java
public java.lang.String getOnpremisesSamAccountName();
```

- *Type:* java.lang.String

---

##### `onpremisesSecurityIdentifier`<sup>Required</sup> <a name="onpremisesSecurityIdentifier" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSecurityIdentifier"></a>

```java
public java.lang.String getOnpremisesSecurityIdentifier();
```

- *Type:* java.lang.String

---

##### `onpremisesSyncEnabled`<sup>Required</sup> <a name="onpremisesSyncEnabled" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesSyncEnabled"></a>

```java
public IResolvable getOnpremisesSyncEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `onpremisesUserPrincipalName`<sup>Required</sup> <a name="onpremisesUserPrincipalName" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.onpremisesUserPrincipalName"></a>

```java
public java.lang.String getOnpremisesUserPrincipalName();
```

- *Type:* java.lang.String

---

##### `otherMails`<sup>Required</sup> <a name="otherMails" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.otherMails"></a>

```java
public java.util.List<java.lang.String> getOtherMails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.preferredLanguage"></a>

```java
public java.lang.String getPreferredLanguage();
```

- *Type:* java.lang.String

---

##### `proxyAddresses`<sup>Required</sup> <a name="proxyAddresses" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.proxyAddresses"></a>

```java
public java.util.List<java.lang.String> getProxyAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `showInAddressList`<sup>Required</sup> <a name="showInAddressList" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.showInAddressList"></a>

```java
public IResolvable getShowInAddressList();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.timeouts"></a>

```java
public DataAzureadUserTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference">DataAzureadUserTimeoutsOutputReference</a>

---

##### `usageLocation`<sup>Required</sup> <a name="usageLocation" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.usageLocation"></a>

```java
public java.lang.String getUsageLocation();
```

- *Type:* java.lang.String

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.userType"></a>

```java
public java.lang.String getUserType();
```

- *Type:* java.lang.String

---

##### `employeeIdInput`<sup>Optional</sup> <a name="employeeIdInput" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeIdInput"></a>

```java
public java.lang.String getEmployeeIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mailInput`<sup>Optional</sup> <a name="mailInput" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailInput"></a>

```java
public java.lang.String getMailInput();
```

- *Type:* java.lang.String

---

##### `mailNicknameInput`<sup>Optional</sup> <a name="mailNicknameInput" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailNicknameInput"></a>

```java
public java.lang.String getMailNicknameInput();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a>

---

##### `userPrincipalNameInput`<sup>Optional</sup> <a name="userPrincipalNameInput" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.userPrincipalNameInput"></a>

```java
public java.lang.String getUserPrincipalNameInput();
```

- *Type:* java.lang.String

---

##### `employeeId`<sup>Required</sup> <a name="employeeId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.employeeId"></a>

```java
public java.lang.String getEmployeeId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mail`<sup>Required</sup> <a name="mail" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mail"></a>

```java
public java.lang.String getMail();
```

- *Type:* java.lang.String

---

##### `mailNickname`<sup>Required</sup> <a name="mailNickname" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.mailNickname"></a>

```java
public java.lang.String getMailNickname();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `userPrincipalName`<sup>Required</sup> <a name="userPrincipalName" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.userPrincipalName"></a>

```java
public java.lang.String getUserPrincipalName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadUserConfig <a name="DataAzureadUserConfig" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_user.DataAzureadUserConfig;

DataAzureadUserConfig.builder()
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
//  .employeeId(java.lang.String)
//  .id(java.lang.String)
//  .mail(java.lang.String)
//  .mailNickname(java.lang.String)
//  .objectId(java.lang.String)
//  .timeouts(DataAzureadUserTimeouts)
//  .userPrincipalName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.employeeId">employeeId</a></code> | <code>java.lang.String</code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#id DataAzureadUser#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.mail">mail</a></code> | <code>java.lang.String</code> | The SMTP address for the user. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.mailNickname">mailNickname</a></code> | <code>java.lang.String</code> | The email alias of the user. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | The object ID of the user. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.userPrincipalName">userPrincipalName</a></code> | <code>java.lang.String</code> | The user principal name (UPN) of the user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `employeeId`<sup>Optional</sup> <a name="employeeId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.employeeId"></a>

```java
public java.lang.String getEmployeeId();
```

- *Type:* java.lang.String

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#employee_id DataAzureadUser#employee_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#id DataAzureadUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mail`<sup>Optional</sup> <a name="mail" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.mail"></a>

```java
public java.lang.String getMail();
```

- *Type:* java.lang.String

The SMTP address for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#mail DataAzureadUser#mail}

---

##### `mailNickname`<sup>Optional</sup> <a name="mailNickname" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.mailNickname"></a>

```java
public java.lang.String getMailNickname();
```

- *Type:* java.lang.String

The email alias of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#mail_nickname DataAzureadUser#mail_nickname}

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

The object ID of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#object_id DataAzureadUser#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.timeouts"></a>

```java
public DataAzureadUserTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#timeouts DataAzureadUser#timeouts}

---

##### `userPrincipalName`<sup>Optional</sup> <a name="userPrincipalName" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserConfig.property.userPrincipalName"></a>

```java
public java.lang.String getUserPrincipalName();
```

- *Type:* java.lang.String

The user principal name (UPN) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#user_principal_name DataAzureadUser#user_principal_name}

---

### DataAzureadUserTimeouts <a name="DataAzureadUserTimeouts" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_user.DataAzureadUserTimeouts;

DataAzureadUserTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#read DataAzureadUser#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.1.0/docs/data-sources/user#read DataAzureadUser#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadUserTimeoutsOutputReference <a name="DataAzureadUserTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.data_azuread_user.DataAzureadUserTimeoutsOutputReference;

new DataAzureadUserTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.dataAzureadUser.DataAzureadUserTimeouts">DataAzureadUserTimeouts</a>

---



