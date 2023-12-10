# Configuration with AWS Secrets Manager

Spring Cloud AWS Secrets Manager implementation, provides the ability to populate Spring's `Environment` with properties - secrets - defined in [Secrets Manager](https://aws.amazon.com/secrets-manager/).

Integration supports both plain text secrets and JSON secrets. In this guide we use JSON variant. To learn how to use plain text secrets, go to the [reference documentation](https://docs.awspring.io/spring-cloud-aws/docs/3.0.3/reference/html/index.html#using-plain-text-secrets).

## Create a secret in Secrets Manager

Secrets can be created through AWS Console, infrastructure as code solution like Terraform or AWS CDK, or with command line. This guide uses command line interface to AWS, so before you start make sure you have [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html) installed.

Create a file with secrets `mycreds.json`:

```json
{
      "username": "some-user",
      "password": "secret-password"
}
```

Create secret in Secrets Manager with AWS CLI:

```bash
$ aws secretsmanager create-secret --name /secrets/database-secrets --secret-string file://mycreds.json
```

## Create new Spring Boot application

1. Go to https://start.spring.io. This service pulls in all the dependencies you need for an application and does most of the setup for you.
2. Choose either Gradle or Maven and the language you want to use. This guide assumes that you chose Java.
3. Click Generate.

Download the resulting ZIP file, extract it, and open in IDE of your choice.

## Add dependencies

First configure dependency management, to make sure that all Spring Cloud AWS and AWS SDK dependencies are compatible and you don't need to manage versions manually:

In Maven:

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>io.awspring.cloud</groupId>
            <artifactId>spring-cloud-aws-dependencies</artifactId>
            <version>3.0.3</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

In Gradle:

```groovy
dependencies {
  implementation platform("io.awspring.cloud:spring-cloud-aws-dependencies:3.0.3")
}
```

Next, add the dependency to Secrets Manager starter:

In Maven:

```xml
<dependency>
    <groupId>io.awspring.cloud</groupId>
    <artifactId>spring-cloud-aws-starter-secrets-manager</artifactId>
</dependency>
```

In Gradle:

```groovy
implementation 'io.awspring.cloud:spring-cloud-aws-starter-secrets-manager'
```

## Configure Spring Boot

In `application.properties` or `application.yml`, add `spring.config.import` entry pointing to a secret in Secrets Manager:

```properties
spring.config.import=aws-secretsmanager:/secrets/database-secrets
```

## Use secret in Spring Boot configuration

All properties from a JSON secret gets added to Spring `Environment`, which means you can refer them in `application.properties` or `application.yml` code:

```properties
spring.datasource.username=${username}
spring.datasource.password=${password}
```

## Use secret in Java code

Secret values can be also referenced with `@Value` annotation or through `Environment#getProperty` method:

```java
@Service
class MyService {

    @Value("${password}") 
    private String password;
}
```

## Read more

This was just a glympse of what Spring Cloud AWS can do. For more details about Secrets Manager integration go to the [reference documentation](https://docs.awspring.io/spring-cloud-aws/docs/3.0.2/reference/html/index.html#spring-cloud-aws-secrets-manager).
