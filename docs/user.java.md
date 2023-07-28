# `azuread_user`

Refer to the Terraform Registory for docs: [`azuread_user`](https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user).

# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-azuread.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-azuread.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user azuread_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.user.User.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.user.User;

User.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .userPrincipalName(java.lang.String)
//  .accountEnabled(java.lang.Boolean)
//  .accountEnabled(IResolvable)
//  .ageGroup(java.lang.String)
//  .businessPhones(java.util.List<java.lang.String>)
//  .city(java.lang.String)
//  .companyName(java.lang.String)
//  .consentProvidedForMinor(java.lang.String)
//  .costCenter(java.lang.String)
//  .country(java.lang.String)
//  .department(java.lang.String)
//  .disablePasswordExpiration(java.lang.Boolean)
//  .disablePasswordExpiration(IResolvable)
//  .disableStrongPassword(java.lang.Boolean)
//  .disableStrongPassword(IResolvable)
//  .division(java.lang.String)
//  .employeeId(java.lang.String)
//  .employeeType(java.lang.String)
//  .faxNumber(java.lang.String)
//  .forcePasswordChange(java.lang.Boolean)
//  .forcePasswordChange(IResolvable)
//  .givenName(java.lang.String)
//  .id(java.lang.String)
//  .jobTitle(java.lang.String)
//  .mail(java.lang.String)
//  .mailNickname(java.lang.String)
//  .managerId(java.lang.String)
//  .mobilePhone(java.lang.String)
//  .officeLocation(java.lang.String)
//  .onpremisesImmutableId(java.lang.String)
//  .otherMails(java.util.List<java.lang.String>)
//  .password(java.lang.String)
//  .postalCode(java.lang.String)
//  .preferredLanguage(java.lang.String)
//  .showInAddressList(java.lang.Boolean)
//  .showInAddressList(IResolvable)
//  .state(java.lang.String)
//  .streetAddress(java.lang.String)
//  .surname(java.lang.String)
//  .timeouts(UserTimeouts)
//  .usageLocation(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The name to display in the address book for the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.userPrincipalName">userPrincipalName</a></code> | <code>java.lang.String</code> | The user principal name (UPN) of the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.accountEnabled">accountEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the account should be enabled. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.ageGroup">ageGroup</a></code> | <code>java.lang.String</code> | The age group of the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.businessPhones">businessPhones</a></code> | <code>java.util.List<java.lang.String></code> | The telephone numbers for the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.city">city</a></code> | <code>java.lang.String</code> | The city in which the user is located. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.companyName">companyName</a></code> | <code>java.lang.String</code> | The company name which the user is associated. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.consentProvidedForMinor">consentProvidedForMinor</a></code> | <code>java.lang.String</code> | Whether consent has been obtained for minors. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.costCenter">costCenter</a></code> | <code>java.lang.String</code> | The cost center associated with the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.country">country</a></code> | <code>java.lang.String</code> | The country/region in which the user is located, e.g. `US` or `UK`. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.department">department</a></code> | <code>java.lang.String</code> | The name for the department in which the user works. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.disablePasswordExpiration">disablePasswordExpiration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the users password is exempt from expiring. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.disableStrongPassword">disableStrongPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the user is allowed weaker passwords than the default policy to be specified. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.division">division</a></code> | <code>java.lang.String</code> | The name of the division in which the user works. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.employeeId">employeeId</a></code> | <code>java.lang.String</code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.employeeType">employeeType</a></code> | <code>java.lang.String</code> | Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.faxNumber">faxNumber</a></code> | <code>java.lang.String</code> | The fax number of the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.forcePasswordChange">forcePasswordChange</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the user is forced to change the password during the next sign-in. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.givenName">givenName</a></code> | <code>java.lang.String</code> | The given name (first name) of the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | The user’s job title. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.mail">mail</a></code> | <code>java.lang.String</code> | The SMTP address for the user. Cannot be unset. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.mailNickname">mailNickname</a></code> | <code>java.lang.String</code> | The mail alias for the user. Defaults to the user name part of the user principal name (UPN). |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.managerId">managerId</a></code> | <code>java.lang.String</code> | The object ID of the user's manager. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.mobilePhone">mobilePhone</a></code> | <code>java.lang.String</code> | The primary cellular telephone number for the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.officeLocation">officeLocation</a></code> | <code>java.lang.String</code> | The office location in the user's place of business. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.onpremisesImmutableId">onpremisesImmutableId</a></code> | <code>java.lang.String</code> | The value used to associate an on-premise Active Directory user account with their Azure AD user object. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.otherMails">otherMails</a></code> | <code>java.util.List<java.lang.String></code> | Additional email addresses for the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password for the user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.postalCode">postalCode</a></code> | <code>java.lang.String</code> | The postal code for the user's postal address. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | The user's preferred language, in ISO 639-1 notation. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.showInAddressList">showInAddressList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the Outlook global address list should include this user. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | The state or province in the user's address. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | The street address of the user's place of business. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.surname">surname</a></code> | <code>java.lang.String</code> | The user's surname (family name or last name). |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.usageLocation">usageLocation</a></code> | <code>java.lang.String</code> | The usage location of the user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.user.User.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.user.User.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.user.User.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.user.User.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.user.User.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.user.User.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.user.User.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.user.User.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The name to display in the address book for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#display_name User#display_name}

---

##### `userPrincipalName`<sup>Required</sup> <a name="userPrincipalName" id="@cdktf/provider-azuread.user.User.Initializer.parameter.userPrincipalName"></a>

- *Type:* java.lang.String

The user principal name (UPN) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#user_principal_name User#user_principal_name}

---

##### `accountEnabled`<sup>Optional</sup> <a name="accountEnabled" id="@cdktf/provider-azuread.user.User.Initializer.parameter.accountEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the account should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#account_enabled User#account_enabled}

---

##### `ageGroup`<sup>Optional</sup> <a name="ageGroup" id="@cdktf/provider-azuread.user.User.Initializer.parameter.ageGroup"></a>

- *Type:* java.lang.String

The age group of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#age_group User#age_group}

---

##### `businessPhones`<sup>Optional</sup> <a name="businessPhones" id="@cdktf/provider-azuread.user.User.Initializer.parameter.businessPhones"></a>

- *Type:* java.util.List<java.lang.String>

The telephone numbers for the user.

Only one number can be set for this property. Read-only for users synced with Azure AD Connect

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#business_phones User#business_phones}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-azuread.user.User.Initializer.parameter.city"></a>

- *Type:* java.lang.String

The city in which the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#city User#city}

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="@cdktf/provider-azuread.user.User.Initializer.parameter.companyName"></a>

- *Type:* java.lang.String

The company name which the user is associated.

This property can be useful for describing the company that an external user comes from

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#company_name User#company_name}

---

##### `consentProvidedForMinor`<sup>Optional</sup> <a name="consentProvidedForMinor" id="@cdktf/provider-azuread.user.User.Initializer.parameter.consentProvidedForMinor"></a>

- *Type:* java.lang.String

Whether consent has been obtained for minors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#consent_provided_for_minor User#consent_provided_for_minor}

---

##### `costCenter`<sup>Optional</sup> <a name="costCenter" id="@cdktf/provider-azuread.user.User.Initializer.parameter.costCenter"></a>

- *Type:* java.lang.String

The cost center associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#cost_center User#cost_center}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-azuread.user.User.Initializer.parameter.country"></a>

- *Type:* java.lang.String

The country/region in which the user is located, e.g. `US` or `UK`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#country User#country}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-azuread.user.User.Initializer.parameter.department"></a>

- *Type:* java.lang.String

The name for the department in which the user works.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#department User#department}

---

##### `disablePasswordExpiration`<sup>Optional</sup> <a name="disablePasswordExpiration" id="@cdktf/provider-azuread.user.User.Initializer.parameter.disablePasswordExpiration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the users password is exempt from expiring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#disable_password_expiration User#disable_password_expiration}

---

##### `disableStrongPassword`<sup>Optional</sup> <a name="disableStrongPassword" id="@cdktf/provider-azuread.user.User.Initializer.parameter.disableStrongPassword"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the user is allowed weaker passwords than the default policy to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#disable_strong_password User#disable_strong_password}

---

##### `division`<sup>Optional</sup> <a name="division" id="@cdktf/provider-azuread.user.User.Initializer.parameter.division"></a>

- *Type:* java.lang.String

The name of the division in which the user works.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#division User#division}

---

##### `employeeId`<sup>Optional</sup> <a name="employeeId" id="@cdktf/provider-azuread.user.User.Initializer.parameter.employeeId"></a>

- *Type:* java.lang.String

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#employee_id User#employee_id}

---

##### `employeeType`<sup>Optional</sup> <a name="employeeType" id="@cdktf/provider-azuread.user.User.Initializer.parameter.employeeType"></a>

- *Type:* java.lang.String

Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#employee_type User#employee_type}

---

##### `faxNumber`<sup>Optional</sup> <a name="faxNumber" id="@cdktf/provider-azuread.user.User.Initializer.parameter.faxNumber"></a>

- *Type:* java.lang.String

The fax number of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#fax_number User#fax_number}

---

##### `forcePasswordChange`<sup>Optional</sup> <a name="forcePasswordChange" id="@cdktf/provider-azuread.user.User.Initializer.parameter.forcePasswordChange"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the user is forced to change the password during the next sign-in.

Only takes effect when also changing the password

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#force_password_change User#force_password_change}

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktf/provider-azuread.user.User.Initializer.parameter.givenName"></a>

- *Type:* java.lang.String

The given name (first name) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#given_name User#given_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.user.User.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobTitle`<sup>Optional</sup> <a name="jobTitle" id="@cdktf/provider-azuread.user.User.Initializer.parameter.jobTitle"></a>

- *Type:* java.lang.String

The user’s job title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#job_title User#job_title}

---

##### `mail`<sup>Optional</sup> <a name="mail" id="@cdktf/provider-azuread.user.User.Initializer.parameter.mail"></a>

- *Type:* java.lang.String

The SMTP address for the user. Cannot be unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#mail User#mail}

---

##### `mailNickname`<sup>Optional</sup> <a name="mailNickname" id="@cdktf/provider-azuread.user.User.Initializer.parameter.mailNickname"></a>

- *Type:* java.lang.String

The mail alias for the user. Defaults to the user name part of the user principal name (UPN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#mail_nickname User#mail_nickname}

---

##### `managerId`<sup>Optional</sup> <a name="managerId" id="@cdktf/provider-azuread.user.User.Initializer.parameter.managerId"></a>

- *Type:* java.lang.String

The object ID of the user's manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#manager_id User#manager_id}

---

##### `mobilePhone`<sup>Optional</sup> <a name="mobilePhone" id="@cdktf/provider-azuread.user.User.Initializer.parameter.mobilePhone"></a>

- *Type:* java.lang.String

The primary cellular telephone number for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `officeLocation`<sup>Optional</sup> <a name="officeLocation" id="@cdktf/provider-azuread.user.User.Initializer.parameter.officeLocation"></a>

- *Type:* java.lang.String

The office location in the user's place of business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#office_location User#office_location}

---

##### `onpremisesImmutableId`<sup>Optional</sup> <a name="onpremisesImmutableId" id="@cdktf/provider-azuread.user.User.Initializer.parameter.onpremisesImmutableId"></a>

- *Type:* java.lang.String

The value used to associate an on-premise Active Directory user account with their Azure AD user object.

This must be specified if you are using a federated domain for the user's `user_principal_name` property when creating a new user account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#onpremises_immutable_id User#onpremises_immutable_id}

---

##### `otherMails`<sup>Optional</sup> <a name="otherMails" id="@cdktf/provider-azuread.user.User.Initializer.parameter.otherMails"></a>

- *Type:* java.util.List<java.lang.String>

Additional email addresses for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#other_mails User#other_mails}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azuread.user.User.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password for the user.

The password must satisfy minimum requirements as specified by the password policy. The maximum length is 256 characters. This property is required when creating a new user

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#password User#password}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-azuread.user.User.Initializer.parameter.postalCode"></a>

- *Type:* java.lang.String

The postal code for the user's postal address.

The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#postal_code User#postal_code}

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="@cdktf/provider-azuread.user.User.Initializer.parameter.preferredLanguage"></a>

- *Type:* java.lang.String

The user's preferred language, in ISO 639-1 notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#preferred_language User#preferred_language}

---

##### `showInAddressList`<sup>Optional</sup> <a name="showInAddressList" id="@cdktf/provider-azuread.user.User.Initializer.parameter.showInAddressList"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the Outlook global address list should include this user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#show_in_address_list User#show_in_address_list}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-azuread.user.User.Initializer.parameter.state"></a>

- *Type:* java.lang.String

The state or province in the user's address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#state User#state}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-azuread.user.User.Initializer.parameter.streetAddress"></a>

- *Type:* java.lang.String

The street address of the user's place of business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#street_address User#street_address}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktf/provider-azuread.user.User.Initializer.parameter.surname"></a>

- *Type:* java.lang.String

The user's surname (family name or last name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#surname User#surname}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.user.User.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#timeouts User#timeouts}

---

##### `usageLocation`<sup>Optional</sup> <a name="usageLocation" id="@cdktf/provider-azuread.user.User.Initializer.parameter.usageLocation"></a>

- *Type:* java.lang.String

The usage location of the user.

Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. The usage location is a two letter country code (ISO standard 3166). Examples include: `NO`, `JP`, and `GB`. Cannot be reset to null once set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#usage_location User#usage_location}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.user.User.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.user.User.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetAccountEnabled">resetAccountEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetAgeGroup">resetAgeGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetBusinessPhones">resetBusinessPhones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCompanyName">resetCompanyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetConsentProvidedForMinor">resetConsentProvidedForMinor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCostCenter">resetCostCenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDepartment">resetDepartment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDisablePasswordExpiration">resetDisablePasswordExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDisableStrongPassword">resetDisableStrongPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDivision">resetDivision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetEmployeeId">resetEmployeeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetEmployeeType">resetEmployeeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetFaxNumber">resetFaxNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetForcePasswordChange">resetForcePasswordChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetGivenName">resetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetJobTitle">resetJobTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetMail">resetMail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetMailNickname">resetMailNickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetManagerId">resetManagerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetMobilePhone">resetMobilePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOfficeLocation">resetOfficeLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOnpremisesImmutableId">resetOnpremisesImmutableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOtherMails">resetOtherMails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetPreferredLanguage">resetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetShowInAddressList">resetShowInAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetSurname">resetSurname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetUsageLocation">resetUsageLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.user.User.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.user.User.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.user.User.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.user.User.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.user.User.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.user.User.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.user.User.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.user.User.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.user.User.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.user.User.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.user.User.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.user.User.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.user.User.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.user.User.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.user.User.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.user.User.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.user.User.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.user.User.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.user.User.putTimeouts"></a>

```java
public void putTimeouts(UserTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.user.User.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>

---

##### `resetAccountEnabled` <a name="resetAccountEnabled" id="@cdktf/provider-azuread.user.User.resetAccountEnabled"></a>

```java
public void resetAccountEnabled()
```

##### `resetAgeGroup` <a name="resetAgeGroup" id="@cdktf/provider-azuread.user.User.resetAgeGroup"></a>

```java
public void resetAgeGroup()
```

##### `resetBusinessPhones` <a name="resetBusinessPhones" id="@cdktf/provider-azuread.user.User.resetBusinessPhones"></a>

```java
public void resetBusinessPhones()
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-azuread.user.User.resetCity"></a>

```java
public void resetCity()
```

##### `resetCompanyName` <a name="resetCompanyName" id="@cdktf/provider-azuread.user.User.resetCompanyName"></a>

```java
public void resetCompanyName()
```

##### `resetConsentProvidedForMinor` <a name="resetConsentProvidedForMinor" id="@cdktf/provider-azuread.user.User.resetConsentProvidedForMinor"></a>

```java
public void resetConsentProvidedForMinor()
```

##### `resetCostCenter` <a name="resetCostCenter" id="@cdktf/provider-azuread.user.User.resetCostCenter"></a>

```java
public void resetCostCenter()
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-azuread.user.User.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetDepartment` <a name="resetDepartment" id="@cdktf/provider-azuread.user.User.resetDepartment"></a>

```java
public void resetDepartment()
```

##### `resetDisablePasswordExpiration` <a name="resetDisablePasswordExpiration" id="@cdktf/provider-azuread.user.User.resetDisablePasswordExpiration"></a>

```java
public void resetDisablePasswordExpiration()
```

##### `resetDisableStrongPassword` <a name="resetDisableStrongPassword" id="@cdktf/provider-azuread.user.User.resetDisableStrongPassword"></a>

```java
public void resetDisableStrongPassword()
```

##### `resetDivision` <a name="resetDivision" id="@cdktf/provider-azuread.user.User.resetDivision"></a>

```java
public void resetDivision()
```

##### `resetEmployeeId` <a name="resetEmployeeId" id="@cdktf/provider-azuread.user.User.resetEmployeeId"></a>

```java
public void resetEmployeeId()
```

##### `resetEmployeeType` <a name="resetEmployeeType" id="@cdktf/provider-azuread.user.User.resetEmployeeType"></a>

```java
public void resetEmployeeType()
```

##### `resetFaxNumber` <a name="resetFaxNumber" id="@cdktf/provider-azuread.user.User.resetFaxNumber"></a>

```java
public void resetFaxNumber()
```

##### `resetForcePasswordChange` <a name="resetForcePasswordChange" id="@cdktf/provider-azuread.user.User.resetForcePasswordChange"></a>

```java
public void resetForcePasswordChange()
```

##### `resetGivenName` <a name="resetGivenName" id="@cdktf/provider-azuread.user.User.resetGivenName"></a>

```java
public void resetGivenName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.user.User.resetId"></a>

```java
public void resetId()
```

##### `resetJobTitle` <a name="resetJobTitle" id="@cdktf/provider-azuread.user.User.resetJobTitle"></a>

```java
public void resetJobTitle()
```

##### `resetMail` <a name="resetMail" id="@cdktf/provider-azuread.user.User.resetMail"></a>

```java
public void resetMail()
```

##### `resetMailNickname` <a name="resetMailNickname" id="@cdktf/provider-azuread.user.User.resetMailNickname"></a>

```java
public void resetMailNickname()
```

##### `resetManagerId` <a name="resetManagerId" id="@cdktf/provider-azuread.user.User.resetManagerId"></a>

```java
public void resetManagerId()
```

##### `resetMobilePhone` <a name="resetMobilePhone" id="@cdktf/provider-azuread.user.User.resetMobilePhone"></a>

```java
public void resetMobilePhone()
```

##### `resetOfficeLocation` <a name="resetOfficeLocation" id="@cdktf/provider-azuread.user.User.resetOfficeLocation"></a>

```java
public void resetOfficeLocation()
```

##### `resetOnpremisesImmutableId` <a name="resetOnpremisesImmutableId" id="@cdktf/provider-azuread.user.User.resetOnpremisesImmutableId"></a>

```java
public void resetOnpremisesImmutableId()
```

##### `resetOtherMails` <a name="resetOtherMails" id="@cdktf/provider-azuread.user.User.resetOtherMails"></a>

```java
public void resetOtherMails()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azuread.user.User.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-azuread.user.User.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetPreferredLanguage` <a name="resetPreferredLanguage" id="@cdktf/provider-azuread.user.User.resetPreferredLanguage"></a>

```java
public void resetPreferredLanguage()
```

##### `resetShowInAddressList` <a name="resetShowInAddressList" id="@cdktf/provider-azuread.user.User.resetShowInAddressList"></a>

```java
public void resetShowInAddressList()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-azuread.user.User.resetState"></a>

```java
public void resetState()
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-azuread.user.User.resetStreetAddress"></a>

```java
public void resetStreetAddress()
```

##### `resetSurname` <a name="resetSurname" id="@cdktf/provider-azuread.user.User.resetSurname"></a>

```java
public void resetSurname()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.user.User.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUsageLocation` <a name="resetUsageLocation" id="@cdktf/provider-azuread.user.User.resetUsageLocation"></a>

```java
public void resetUsageLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.user.User.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.user.User.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.user.User;

User.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.user.User.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.user.User.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.user.User;

User.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.user.User.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.user.User.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.user.User;

User.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.user.User.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.user.User.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.aboutMe">aboutMe</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.creationType">creationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.externalUserState">externalUserState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.imAddresses">imAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesDistinguishedName">onpremisesDistinguishedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesDomainName">onpremisesDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesSamAccountName">onpremisesSamAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesSecurityIdentifier">onpremisesSecurityIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesSyncEnabled">onpremisesSyncEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesUserPrincipalName">onpremisesUserPrincipalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.proxyAddresses">proxyAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.userType">userType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.accountEnabledInput">accountEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.ageGroupInput">ageGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.businessPhonesInput">businessPhonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.companyNameInput">companyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.consentProvidedForMinorInput">consentProvidedForMinorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.costCenterInput">costCenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.departmentInput">departmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disablePasswordExpirationInput">disablePasswordExpirationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disableStrongPasswordInput">disableStrongPasswordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.divisionInput">divisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeIdInput">employeeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeTypeInput">employeeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.faxNumberInput">faxNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.forcePasswordChangeInput">forcePasswordChangeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.givenNameInput">givenNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.jobTitleInput">jobTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mailInput">mailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mailNicknameInput">mailNicknameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.managerIdInput">managerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mobilePhoneInput">mobilePhoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.officeLocationInput">officeLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesImmutableIdInput">onpremisesImmutableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.otherMailsInput">otherMailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.preferredLanguageInput">preferredLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.showInAddressListInput">showInAddressListInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.streetAddressInput">streetAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.surnameInput">surnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.usageLocationInput">usageLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.userPrincipalNameInput">userPrincipalNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.accountEnabled">accountEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.ageGroup">ageGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.businessPhones">businessPhones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.consentProvidedForMinor">consentProvidedForMinor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.costCenter">costCenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.department">department</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disablePasswordExpiration">disablePasswordExpiration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disableStrongPassword">disableStrongPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.division">division</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeId">employeeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeType">employeeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.faxNumber">faxNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.forcePasswordChange">forcePasswordChange</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.givenName">givenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mail">mail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mailNickname">mailNickname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.managerId">managerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mobilePhone">mobilePhone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.officeLocation">officeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesImmutableId">onpremisesImmutableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.otherMails">otherMails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.showInAddressList">showInAddressList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.surname">surname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.usageLocation">usageLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.userPrincipalName">userPrincipalName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.user.User.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.user.User.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.user.User.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.user.User.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.user.User.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.user.User.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.user.User.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.user.User.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.user.User.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.user.User.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.user.User.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.user.User.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.user.User.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.user.User.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aboutMe`<sup>Required</sup> <a name="aboutMe" id="@cdktf/provider-azuread.user.User.property.aboutMe"></a>

```java
public java.lang.String getAboutMe();
```

- *Type:* java.lang.String

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="@cdktf/provider-azuread.user.User.property.creationType"></a>

```java
public java.lang.String getCreationType();
```

- *Type:* java.lang.String

---

##### `externalUserState`<sup>Required</sup> <a name="externalUserState" id="@cdktf/provider-azuread.user.User.property.externalUserState"></a>

```java
public java.lang.String getExternalUserState();
```

- *Type:* java.lang.String

---

##### `imAddresses`<sup>Required</sup> <a name="imAddresses" id="@cdktf/provider-azuread.user.User.property.imAddresses"></a>

```java
public java.util.List<java.lang.String> getImAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azuread.user.User.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `onpremisesDistinguishedName`<sup>Required</sup> <a name="onpremisesDistinguishedName" id="@cdktf/provider-azuread.user.User.property.onpremisesDistinguishedName"></a>

```java
public java.lang.String getOnpremisesDistinguishedName();
```

- *Type:* java.lang.String

---

##### `onpremisesDomainName`<sup>Required</sup> <a name="onpremisesDomainName" id="@cdktf/provider-azuread.user.User.property.onpremisesDomainName"></a>

```java
public java.lang.String getOnpremisesDomainName();
```

- *Type:* java.lang.String

---

##### `onpremisesSamAccountName`<sup>Required</sup> <a name="onpremisesSamAccountName" id="@cdktf/provider-azuread.user.User.property.onpremisesSamAccountName"></a>

```java
public java.lang.String getOnpremisesSamAccountName();
```

- *Type:* java.lang.String

---

##### `onpremisesSecurityIdentifier`<sup>Required</sup> <a name="onpremisesSecurityIdentifier" id="@cdktf/provider-azuread.user.User.property.onpremisesSecurityIdentifier"></a>

```java
public java.lang.String getOnpremisesSecurityIdentifier();
```

- *Type:* java.lang.String

---

##### `onpremisesSyncEnabled`<sup>Required</sup> <a name="onpremisesSyncEnabled" id="@cdktf/provider-azuread.user.User.property.onpremisesSyncEnabled"></a>

```java
public IResolvable getOnpremisesSyncEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `onpremisesUserPrincipalName`<sup>Required</sup> <a name="onpremisesUserPrincipalName" id="@cdktf/provider-azuread.user.User.property.onpremisesUserPrincipalName"></a>

```java
public java.lang.String getOnpremisesUserPrincipalName();
```

- *Type:* java.lang.String

---

##### `proxyAddresses`<sup>Required</sup> <a name="proxyAddresses" id="@cdktf/provider-azuread.user.User.property.proxyAddresses"></a>

```java
public java.util.List<java.lang.String> getProxyAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.user.User.property.timeouts"></a>

```java
public UserTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a>

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-azuread.user.User.property.userType"></a>

```java
public java.lang.String getUserType();
```

- *Type:* java.lang.String

---

##### `accountEnabledInput`<sup>Optional</sup> <a name="accountEnabledInput" id="@cdktf/provider-azuread.user.User.property.accountEnabledInput"></a>

```java
public java.lang.Object getAccountEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ageGroupInput`<sup>Optional</sup> <a name="ageGroupInput" id="@cdktf/provider-azuread.user.User.property.ageGroupInput"></a>

```java
public java.lang.String getAgeGroupInput();
```

- *Type:* java.lang.String

---

##### `businessPhonesInput`<sup>Optional</sup> <a name="businessPhonesInput" id="@cdktf/provider-azuread.user.User.property.businessPhonesInput"></a>

```java
public java.util.List<java.lang.String> getBusinessPhonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-azuread.user.User.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="@cdktf/provider-azuread.user.User.property.companyNameInput"></a>

```java
public java.lang.String getCompanyNameInput();
```

- *Type:* java.lang.String

---

##### `consentProvidedForMinorInput`<sup>Optional</sup> <a name="consentProvidedForMinorInput" id="@cdktf/provider-azuread.user.User.property.consentProvidedForMinorInput"></a>

```java
public java.lang.String getConsentProvidedForMinorInput();
```

- *Type:* java.lang.String

---

##### `costCenterInput`<sup>Optional</sup> <a name="costCenterInput" id="@cdktf/provider-azuread.user.User.property.costCenterInput"></a>

```java
public java.lang.String getCostCenterInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-azuread.user.User.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `departmentInput`<sup>Optional</sup> <a name="departmentInput" id="@cdktf/provider-azuread.user.User.property.departmentInput"></a>

```java
public java.lang.String getDepartmentInput();
```

- *Type:* java.lang.String

---

##### `disablePasswordExpirationInput`<sup>Optional</sup> <a name="disablePasswordExpirationInput" id="@cdktf/provider-azuread.user.User.property.disablePasswordExpirationInput"></a>

```java
public java.lang.Object getDisablePasswordExpirationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableStrongPasswordInput`<sup>Optional</sup> <a name="disableStrongPasswordInput" id="@cdktf/provider-azuread.user.User.property.disableStrongPasswordInput"></a>

```java
public java.lang.Object getDisableStrongPasswordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.user.User.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `divisionInput`<sup>Optional</sup> <a name="divisionInput" id="@cdktf/provider-azuread.user.User.property.divisionInput"></a>

```java
public java.lang.String getDivisionInput();
```

- *Type:* java.lang.String

---

##### `employeeIdInput`<sup>Optional</sup> <a name="employeeIdInput" id="@cdktf/provider-azuread.user.User.property.employeeIdInput"></a>

```java
public java.lang.String getEmployeeIdInput();
```

- *Type:* java.lang.String

---

##### `employeeTypeInput`<sup>Optional</sup> <a name="employeeTypeInput" id="@cdktf/provider-azuread.user.User.property.employeeTypeInput"></a>

```java
public java.lang.String getEmployeeTypeInput();
```

- *Type:* java.lang.String

---

##### `faxNumberInput`<sup>Optional</sup> <a name="faxNumberInput" id="@cdktf/provider-azuread.user.User.property.faxNumberInput"></a>

```java
public java.lang.String getFaxNumberInput();
```

- *Type:* java.lang.String

---

##### `forcePasswordChangeInput`<sup>Optional</sup> <a name="forcePasswordChangeInput" id="@cdktf/provider-azuread.user.User.property.forcePasswordChangeInput"></a>

```java
public java.lang.Object getForcePasswordChangeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktf/provider-azuread.user.User.property.givenNameInput"></a>

```java
public java.lang.String getGivenNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.user.User.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jobTitleInput`<sup>Optional</sup> <a name="jobTitleInput" id="@cdktf/provider-azuread.user.User.property.jobTitleInput"></a>

```java
public java.lang.String getJobTitleInput();
```

- *Type:* java.lang.String

---

##### `mailInput`<sup>Optional</sup> <a name="mailInput" id="@cdktf/provider-azuread.user.User.property.mailInput"></a>

```java
public java.lang.String getMailInput();
```

- *Type:* java.lang.String

---

##### `mailNicknameInput`<sup>Optional</sup> <a name="mailNicknameInput" id="@cdktf/provider-azuread.user.User.property.mailNicknameInput"></a>

```java
public java.lang.String getMailNicknameInput();
```

- *Type:* java.lang.String

---

##### `managerIdInput`<sup>Optional</sup> <a name="managerIdInput" id="@cdktf/provider-azuread.user.User.property.managerIdInput"></a>

```java
public java.lang.String getManagerIdInput();
```

- *Type:* java.lang.String

---

##### `mobilePhoneInput`<sup>Optional</sup> <a name="mobilePhoneInput" id="@cdktf/provider-azuread.user.User.property.mobilePhoneInput"></a>

```java
public java.lang.String getMobilePhoneInput();
```

- *Type:* java.lang.String

---

##### `officeLocationInput`<sup>Optional</sup> <a name="officeLocationInput" id="@cdktf/provider-azuread.user.User.property.officeLocationInput"></a>

```java
public java.lang.String getOfficeLocationInput();
```

- *Type:* java.lang.String

---

##### `onpremisesImmutableIdInput`<sup>Optional</sup> <a name="onpremisesImmutableIdInput" id="@cdktf/provider-azuread.user.User.property.onpremisesImmutableIdInput"></a>

```java
public java.lang.String getOnpremisesImmutableIdInput();
```

- *Type:* java.lang.String

---

##### `otherMailsInput`<sup>Optional</sup> <a name="otherMailsInput" id="@cdktf/provider-azuread.user.User.property.otherMailsInput"></a>

```java
public java.util.List<java.lang.String> getOtherMailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azuread.user.User.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-azuread.user.User.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `preferredLanguageInput`<sup>Optional</sup> <a name="preferredLanguageInput" id="@cdktf/provider-azuread.user.User.property.preferredLanguageInput"></a>

```java
public java.lang.String getPreferredLanguageInput();
```

- *Type:* java.lang.String

---

##### `showInAddressListInput`<sup>Optional</sup> <a name="showInAddressListInput" id="@cdktf/provider-azuread.user.User.property.showInAddressListInput"></a>

```java
public java.lang.Object getShowInAddressListInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-azuread.user.User.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-azuread.user.User.property.streetAddressInput"></a>

```java
public java.lang.String getStreetAddressInput();
```

- *Type:* java.lang.String

---

##### `surnameInput`<sup>Optional</sup> <a name="surnameInput" id="@cdktf/provider-azuread.user.User.property.surnameInput"></a>

```java
public java.lang.String getSurnameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.user.User.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>

---

##### `usageLocationInput`<sup>Optional</sup> <a name="usageLocationInput" id="@cdktf/provider-azuread.user.User.property.usageLocationInput"></a>

```java
public java.lang.String getUsageLocationInput();
```

- *Type:* java.lang.String

---

##### `userPrincipalNameInput`<sup>Optional</sup> <a name="userPrincipalNameInput" id="@cdktf/provider-azuread.user.User.property.userPrincipalNameInput"></a>

```java
public java.lang.String getUserPrincipalNameInput();
```

- *Type:* java.lang.String

---

##### `accountEnabled`<sup>Required</sup> <a name="accountEnabled" id="@cdktf/provider-azuread.user.User.property.accountEnabled"></a>

```java
public java.lang.Object getAccountEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ageGroup`<sup>Required</sup> <a name="ageGroup" id="@cdktf/provider-azuread.user.User.property.ageGroup"></a>

```java
public java.lang.String getAgeGroup();
```

- *Type:* java.lang.String

---

##### `businessPhones`<sup>Required</sup> <a name="businessPhones" id="@cdktf/provider-azuread.user.User.property.businessPhones"></a>

```java
public java.util.List<java.lang.String> getBusinessPhones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-azuread.user.User.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktf/provider-azuread.user.User.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `consentProvidedForMinor`<sup>Required</sup> <a name="consentProvidedForMinor" id="@cdktf/provider-azuread.user.User.property.consentProvidedForMinor"></a>

```java
public java.lang.String getConsentProvidedForMinor();
```

- *Type:* java.lang.String

---

##### `costCenter`<sup>Required</sup> <a name="costCenter" id="@cdktf/provider-azuread.user.User.property.costCenter"></a>

```java
public java.lang.String getCostCenter();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-azuread.user.User.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-azuread.user.User.property.department"></a>

```java
public java.lang.String getDepartment();
```

- *Type:* java.lang.String

---

##### `disablePasswordExpiration`<sup>Required</sup> <a name="disablePasswordExpiration" id="@cdktf/provider-azuread.user.User.property.disablePasswordExpiration"></a>

```java
public java.lang.Object getDisablePasswordExpiration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableStrongPassword`<sup>Required</sup> <a name="disableStrongPassword" id="@cdktf/provider-azuread.user.User.property.disableStrongPassword"></a>

```java
public java.lang.Object getDisableStrongPassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.user.User.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-azuread.user.User.property.division"></a>

```java
public java.lang.String getDivision();
```

- *Type:* java.lang.String

---

##### `employeeId`<sup>Required</sup> <a name="employeeId" id="@cdktf/provider-azuread.user.User.property.employeeId"></a>

```java
public java.lang.String getEmployeeId();
```

- *Type:* java.lang.String

---

##### `employeeType`<sup>Required</sup> <a name="employeeType" id="@cdktf/provider-azuread.user.User.property.employeeType"></a>

```java
public java.lang.String getEmployeeType();
```

- *Type:* java.lang.String

---

##### `faxNumber`<sup>Required</sup> <a name="faxNumber" id="@cdktf/provider-azuread.user.User.property.faxNumber"></a>

```java
public java.lang.String getFaxNumber();
```

- *Type:* java.lang.String

---

##### `forcePasswordChange`<sup>Required</sup> <a name="forcePasswordChange" id="@cdktf/provider-azuread.user.User.property.forcePasswordChange"></a>

```java
public java.lang.Object getForcePasswordChange();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktf/provider-azuread.user.User.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.user.User.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="@cdktf/provider-azuread.user.User.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

---

##### `mail`<sup>Required</sup> <a name="mail" id="@cdktf/provider-azuread.user.User.property.mail"></a>

```java
public java.lang.String getMail();
```

- *Type:* java.lang.String

---

##### `mailNickname`<sup>Required</sup> <a name="mailNickname" id="@cdktf/provider-azuread.user.User.property.mailNickname"></a>

```java
public java.lang.String getMailNickname();
```

- *Type:* java.lang.String

---

##### `managerId`<sup>Required</sup> <a name="managerId" id="@cdktf/provider-azuread.user.User.property.managerId"></a>

```java
public java.lang.String getManagerId();
```

- *Type:* java.lang.String

---

##### `mobilePhone`<sup>Required</sup> <a name="mobilePhone" id="@cdktf/provider-azuread.user.User.property.mobilePhone"></a>

```java
public java.lang.String getMobilePhone();
```

- *Type:* java.lang.String

---

##### `officeLocation`<sup>Required</sup> <a name="officeLocation" id="@cdktf/provider-azuread.user.User.property.officeLocation"></a>

```java
public java.lang.String getOfficeLocation();
```

- *Type:* java.lang.String

---

##### `onpremisesImmutableId`<sup>Required</sup> <a name="onpremisesImmutableId" id="@cdktf/provider-azuread.user.User.property.onpremisesImmutableId"></a>

```java
public java.lang.String getOnpremisesImmutableId();
```

- *Type:* java.lang.String

---

##### `otherMails`<sup>Required</sup> <a name="otherMails" id="@cdktf/provider-azuread.user.User.property.otherMails"></a>

```java
public java.util.List<java.lang.String> getOtherMails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azuread.user.User.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-azuread.user.User.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktf/provider-azuread.user.User.property.preferredLanguage"></a>

```java
public java.lang.String getPreferredLanguage();
```

- *Type:* java.lang.String

---

##### `showInAddressList`<sup>Required</sup> <a name="showInAddressList" id="@cdktf/provider-azuread.user.User.property.showInAddressList"></a>

```java
public java.lang.Object getShowInAddressList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azuread.user.User.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-azuread.user.User.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktf/provider-azuread.user.User.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

---

##### `usageLocation`<sup>Required</sup> <a name="usageLocation" id="@cdktf/provider-azuread.user.User.property.usageLocation"></a>

```java
public java.lang.String getUsageLocation();
```

- *Type:* java.lang.String

---

##### `userPrincipalName`<sup>Required</sup> <a name="userPrincipalName" id="@cdktf/provider-azuread.user.User.property.userPrincipalName"></a>

```java
public java.lang.String getUserPrincipalName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.user.User.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-azuread.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.user.UserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.user.UserConfig;

UserConfig.builder()
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
    .displayName(java.lang.String)
    .userPrincipalName(java.lang.String)
//  .accountEnabled(java.lang.Boolean)
//  .accountEnabled(IResolvable)
//  .ageGroup(java.lang.String)
//  .businessPhones(java.util.List<java.lang.String>)
//  .city(java.lang.String)
//  .companyName(java.lang.String)
//  .consentProvidedForMinor(java.lang.String)
//  .costCenter(java.lang.String)
//  .country(java.lang.String)
//  .department(java.lang.String)
//  .disablePasswordExpiration(java.lang.Boolean)
//  .disablePasswordExpiration(IResolvable)
//  .disableStrongPassword(java.lang.Boolean)
//  .disableStrongPassword(IResolvable)
//  .division(java.lang.String)
//  .employeeId(java.lang.String)
//  .employeeType(java.lang.String)
//  .faxNumber(java.lang.String)
//  .forcePasswordChange(java.lang.Boolean)
//  .forcePasswordChange(IResolvable)
//  .givenName(java.lang.String)
//  .id(java.lang.String)
//  .jobTitle(java.lang.String)
//  .mail(java.lang.String)
//  .mailNickname(java.lang.String)
//  .managerId(java.lang.String)
//  .mobilePhone(java.lang.String)
//  .officeLocation(java.lang.String)
//  .onpremisesImmutableId(java.lang.String)
//  .otherMails(java.util.List<java.lang.String>)
//  .password(java.lang.String)
//  .postalCode(java.lang.String)
//  .preferredLanguage(java.lang.String)
//  .showInAddressList(java.lang.Boolean)
//  .showInAddressList(IResolvable)
//  .state(java.lang.String)
//  .streetAddress(java.lang.String)
//  .surname(java.lang.String)
//  .timeouts(UserTimeouts)
//  .usageLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The name to display in the address book for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.userPrincipalName">userPrincipalName</a></code> | <code>java.lang.String</code> | The user principal name (UPN) of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.accountEnabled">accountEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the account should be enabled. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.ageGroup">ageGroup</a></code> | <code>java.lang.String</code> | The age group of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.businessPhones">businessPhones</a></code> | <code>java.util.List<java.lang.String></code> | The telephone numbers for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.city">city</a></code> | <code>java.lang.String</code> | The city in which the user is located. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.companyName">companyName</a></code> | <code>java.lang.String</code> | The company name which the user is associated. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.consentProvidedForMinor">consentProvidedForMinor</a></code> | <code>java.lang.String</code> | Whether consent has been obtained for minors. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.costCenter">costCenter</a></code> | <code>java.lang.String</code> | The cost center associated with the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.country">country</a></code> | <code>java.lang.String</code> | The country/region in which the user is located, e.g. `US` or `UK`. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.department">department</a></code> | <code>java.lang.String</code> | The name for the department in which the user works. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.disablePasswordExpiration">disablePasswordExpiration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the users password is exempt from expiring. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.disableStrongPassword">disableStrongPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the user is allowed weaker passwords than the default policy to be specified. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.division">division</a></code> | <code>java.lang.String</code> | The name of the division in which the user works. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.employeeId">employeeId</a></code> | <code>java.lang.String</code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.employeeType">employeeType</a></code> | <code>java.lang.String</code> | Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.faxNumber">faxNumber</a></code> | <code>java.lang.String</code> | The fax number of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.forcePasswordChange">forcePasswordChange</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the user is forced to change the password during the next sign-in. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.givenName">givenName</a></code> | <code>java.lang.String</code> | The given name (first name) of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | The user’s job title. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.mail">mail</a></code> | <code>java.lang.String</code> | The SMTP address for the user. Cannot be unset. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.mailNickname">mailNickname</a></code> | <code>java.lang.String</code> | The mail alias for the user. Defaults to the user name part of the user principal name (UPN). |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.managerId">managerId</a></code> | <code>java.lang.String</code> | The object ID of the user's manager. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.mobilePhone">mobilePhone</a></code> | <code>java.lang.String</code> | The primary cellular telephone number for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.officeLocation">officeLocation</a></code> | <code>java.lang.String</code> | The office location in the user's place of business. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.onpremisesImmutableId">onpremisesImmutableId</a></code> | <code>java.lang.String</code> | The value used to associate an on-premise Active Directory user account with their Azure AD user object. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.otherMails">otherMails</a></code> | <code>java.util.List<java.lang.String></code> | Additional email addresses for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | The postal code for the user's postal address. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | The user's preferred language, in ISO 639-1 notation. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.showInAddressList">showInAddressList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not the Outlook global address list should include this user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.state">state</a></code> | <code>java.lang.String</code> | The state or province in the user's address. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | The street address of the user's place of business. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.surname">surname</a></code> | <code>java.lang.String</code> | The user's surname (family name or last name). |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.usageLocation">usageLocation</a></code> | <code>java.lang.String</code> | The usage location of the user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.user.UserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.user.UserConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.user.UserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.user.UserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.user.UserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.user.UserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.user.UserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.user.UserConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The name to display in the address book for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#display_name User#display_name}

---

##### `userPrincipalName`<sup>Required</sup> <a name="userPrincipalName" id="@cdktf/provider-azuread.user.UserConfig.property.userPrincipalName"></a>

```java
public java.lang.String getUserPrincipalName();
```

- *Type:* java.lang.String

The user principal name (UPN) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#user_principal_name User#user_principal_name}

---

##### `accountEnabled`<sup>Optional</sup> <a name="accountEnabled" id="@cdktf/provider-azuread.user.UserConfig.property.accountEnabled"></a>

```java
public java.lang.Object getAccountEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the account should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#account_enabled User#account_enabled}

---

##### `ageGroup`<sup>Optional</sup> <a name="ageGroup" id="@cdktf/provider-azuread.user.UserConfig.property.ageGroup"></a>

```java
public java.lang.String getAgeGroup();
```

- *Type:* java.lang.String

The age group of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#age_group User#age_group}

---

##### `businessPhones`<sup>Optional</sup> <a name="businessPhones" id="@cdktf/provider-azuread.user.UserConfig.property.businessPhones"></a>

```java
public java.util.List<java.lang.String> getBusinessPhones();
```

- *Type:* java.util.List<java.lang.String>

The telephone numbers for the user.

Only one number can be set for this property. Read-only for users synced with Azure AD Connect

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#business_phones User#business_phones}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-azuread.user.UserConfig.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

The city in which the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#city User#city}

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="@cdktf/provider-azuread.user.UserConfig.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

The company name which the user is associated.

This property can be useful for describing the company that an external user comes from

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#company_name User#company_name}

---

##### `consentProvidedForMinor`<sup>Optional</sup> <a name="consentProvidedForMinor" id="@cdktf/provider-azuread.user.UserConfig.property.consentProvidedForMinor"></a>

```java
public java.lang.String getConsentProvidedForMinor();
```

- *Type:* java.lang.String

Whether consent has been obtained for minors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#consent_provided_for_minor User#consent_provided_for_minor}

---

##### `costCenter`<sup>Optional</sup> <a name="costCenter" id="@cdktf/provider-azuread.user.UserConfig.property.costCenter"></a>

```java
public java.lang.String getCostCenter();
```

- *Type:* java.lang.String

The cost center associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#cost_center User#cost_center}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-azuread.user.UserConfig.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

The country/region in which the user is located, e.g. `US` or `UK`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#country User#country}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-azuread.user.UserConfig.property.department"></a>

```java
public java.lang.String getDepartment();
```

- *Type:* java.lang.String

The name for the department in which the user works.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#department User#department}

---

##### `disablePasswordExpiration`<sup>Optional</sup> <a name="disablePasswordExpiration" id="@cdktf/provider-azuread.user.UserConfig.property.disablePasswordExpiration"></a>

```java
public java.lang.Object getDisablePasswordExpiration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the users password is exempt from expiring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#disable_password_expiration User#disable_password_expiration}

---

##### `disableStrongPassword`<sup>Optional</sup> <a name="disableStrongPassword" id="@cdktf/provider-azuread.user.UserConfig.property.disableStrongPassword"></a>

```java
public java.lang.Object getDisableStrongPassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the user is allowed weaker passwords than the default policy to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#disable_strong_password User#disable_strong_password}

---

##### `division`<sup>Optional</sup> <a name="division" id="@cdktf/provider-azuread.user.UserConfig.property.division"></a>

```java
public java.lang.String getDivision();
```

- *Type:* java.lang.String

The name of the division in which the user works.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#division User#division}

---

##### `employeeId`<sup>Optional</sup> <a name="employeeId" id="@cdktf/provider-azuread.user.UserConfig.property.employeeId"></a>

```java
public java.lang.String getEmployeeId();
```

- *Type:* java.lang.String

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#employee_id User#employee_id}

---

##### `employeeType`<sup>Optional</sup> <a name="employeeType" id="@cdktf/provider-azuread.user.UserConfig.property.employeeType"></a>

```java
public java.lang.String getEmployeeType();
```

- *Type:* java.lang.String

Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#employee_type User#employee_type}

---

##### `faxNumber`<sup>Optional</sup> <a name="faxNumber" id="@cdktf/provider-azuread.user.UserConfig.property.faxNumber"></a>

```java
public java.lang.String getFaxNumber();
```

- *Type:* java.lang.String

The fax number of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#fax_number User#fax_number}

---

##### `forcePasswordChange`<sup>Optional</sup> <a name="forcePasswordChange" id="@cdktf/provider-azuread.user.UserConfig.property.forcePasswordChange"></a>

```java
public java.lang.Object getForcePasswordChange();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the user is forced to change the password during the next sign-in.

Only takes effect when also changing the password

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#force_password_change User#force_password_change}

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktf/provider-azuread.user.UserConfig.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

The given name (first name) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#given_name User#given_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.user.UserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobTitle`<sup>Optional</sup> <a name="jobTitle" id="@cdktf/provider-azuread.user.UserConfig.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

The user’s job title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#job_title User#job_title}

---

##### `mail`<sup>Optional</sup> <a name="mail" id="@cdktf/provider-azuread.user.UserConfig.property.mail"></a>

```java
public java.lang.String getMail();
```

- *Type:* java.lang.String

The SMTP address for the user. Cannot be unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#mail User#mail}

---

##### `mailNickname`<sup>Optional</sup> <a name="mailNickname" id="@cdktf/provider-azuread.user.UserConfig.property.mailNickname"></a>

```java
public java.lang.String getMailNickname();
```

- *Type:* java.lang.String

The mail alias for the user. Defaults to the user name part of the user principal name (UPN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#mail_nickname User#mail_nickname}

---

##### `managerId`<sup>Optional</sup> <a name="managerId" id="@cdktf/provider-azuread.user.UserConfig.property.managerId"></a>

```java
public java.lang.String getManagerId();
```

- *Type:* java.lang.String

The object ID of the user's manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#manager_id User#manager_id}

---

##### `mobilePhone`<sup>Optional</sup> <a name="mobilePhone" id="@cdktf/provider-azuread.user.UserConfig.property.mobilePhone"></a>

```java
public java.lang.String getMobilePhone();
```

- *Type:* java.lang.String

The primary cellular telephone number for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `officeLocation`<sup>Optional</sup> <a name="officeLocation" id="@cdktf/provider-azuread.user.UserConfig.property.officeLocation"></a>

```java
public java.lang.String getOfficeLocation();
```

- *Type:* java.lang.String

The office location in the user's place of business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#office_location User#office_location}

---

##### `onpremisesImmutableId`<sup>Optional</sup> <a name="onpremisesImmutableId" id="@cdktf/provider-azuread.user.UserConfig.property.onpremisesImmutableId"></a>

```java
public java.lang.String getOnpremisesImmutableId();
```

- *Type:* java.lang.String

The value used to associate an on-premise Active Directory user account with their Azure AD user object.

This must be specified if you are using a federated domain for the user's `user_principal_name` property when creating a new user account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#onpremises_immutable_id User#onpremises_immutable_id}

---

##### `otherMails`<sup>Optional</sup> <a name="otherMails" id="@cdktf/provider-azuread.user.UserConfig.property.otherMails"></a>

```java
public java.util.List<java.lang.String> getOtherMails();
```

- *Type:* java.util.List<java.lang.String>

Additional email addresses for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#other_mails User#other_mails}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azuread.user.UserConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password for the user.

The password must satisfy minimum requirements as specified by the password policy. The maximum length is 256 characters. This property is required when creating a new user

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#password User#password}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-azuread.user.UserConfig.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

The postal code for the user's postal address.

The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#postal_code User#postal_code}

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="@cdktf/provider-azuread.user.UserConfig.property.preferredLanguage"></a>

```java
public java.lang.String getPreferredLanguage();
```

- *Type:* java.lang.String

The user's preferred language, in ISO 639-1 notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#preferred_language User#preferred_language}

---

##### `showInAddressList`<sup>Optional</sup> <a name="showInAddressList" id="@cdktf/provider-azuread.user.UserConfig.property.showInAddressList"></a>

```java
public java.lang.Object getShowInAddressList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not the Outlook global address list should include this user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#show_in_address_list User#show_in_address_list}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-azuread.user.UserConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

The state or province in the user's address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#state User#state}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-azuread.user.UserConfig.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

The street address of the user's place of business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#street_address User#street_address}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktf/provider-azuread.user.UserConfig.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

The user's surname (family name or last name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#surname User#surname}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.user.UserConfig.property.timeouts"></a>

```java
public UserTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#timeouts User#timeouts}

---

##### `usageLocation`<sup>Optional</sup> <a name="usageLocation" id="@cdktf/provider-azuread.user.UserConfig.property.usageLocation"></a>

```java
public java.lang.String getUsageLocation();
```

- *Type:* java.lang.String

The usage location of the user.

Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. The usage location is a two letter country code (ISO standard 3166). Examples include: `NO`, `JP`, and `GB`. Cannot be reset to null once set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#usage_location User#usage_location}

---

### UserTimeouts <a name="UserTimeouts" id="@cdktf/provider-azuread.user.UserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.user.UserTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.user.UserTimeouts;

UserTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#create User#create}. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#delete User#delete}. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#read User#read}. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#update User#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.user.UserTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#create User#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.user.UserTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#delete User#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.user.UserTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#read User#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.user.UserTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.41.0/docs/resources/user#update User#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### UserTimeoutsOutputReference <a name="UserTimeoutsOutputReference" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.user.UserTimeoutsOutputReference;

new UserTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>

---



