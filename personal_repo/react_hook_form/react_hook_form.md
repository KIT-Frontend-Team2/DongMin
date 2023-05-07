# react_hook_form 라이브러리 사용


-- npm install react-hook-form

> ## 장점

- 성능 최적화: 불필요한 리렌더링을 최소화하여 성능을 최적화합니다. 기본적으로 입력 값이 변경될 때마다 상태 업데이트와 리렌더링이 발생하지 않습니다.

- 간편한 폼 검증: 라이브러리는 다양한 검증 옵션과 함께 제공되어 사용자 지정 검증 로직을 쉽게 추가할 수 있습니다. 또한, Yup 및 Joi와 같은 외부 유효성 검사 라이브러리와의 통합도 간편합니다.

- 폼 상태 관리: react-hook-form은 필드 값, 에러 메시지, 폼 상태 등을 쉽게 관리할 수 있도록 도와줍니다.

- 컴포넌트 독립성: Controller 컴포넌트를 사용하여 제어되는 컴포넌트와 비제어 컴포넌트를 모두 지원합니다. 이를 통해 기존에 작성된 컴포넌트 코드에 큰 변경 없이 폼 관리를 적용할 수 있습니다.

- 유연성: 기본적인 HTML 입력 요소뿐만 아니라 복잡한 폼 컴포넌트와도 호환되도록 설계되어 있습니다. 따라서 다양한 UI 라이브러리와 함께 사용할 수 있습니다.

<br>
<br>
<br>

> ## 단점

- 학습 곡선: react-hook-form의 독특한 API와 개념을 익히는 데 시간이 걸릴 수 있습니다. 특히 이전에 다른 폼 관리 라이브러리를 사용했다면 적응하는 데 어려움이 있을 수 있습니다.

- 사용자 정의 로직의 복잡성: 특정 사용 사례에 대해 사용자 정의 로직을 구현하는 데 필요한 코드가 복잡해질 수 있습니다. 때때로 라이브러리의 추상화 수준 때문에 추가 작업이 필요할 수도 있습니다.

- 커뮤니티와 자료: react-hook-form은 상대적으로 새로운 라이브러리이기 때문에, 커뮤니티와 사용 가능한 자료가 다른 폼 관리 라이브러리에 비해 적을 수 있습니다.

<br>
<br>
<br>

## Get started 영상 링크 요약

<br>
<br>

- react-hook-form 소개: React에서 폼을 쉽게 관리할 수 있도록 도와주는 라이브러리인 react-hook-form을 소개합니다. 이 라이브러리는 불필요한 리렌더링을 최소화하고 폼 검증을 간편하게 수행할 수 있도록 도와줍니다.

- 설치 및 사용법: react-hook-form을 설치하는 방법과 useForm 훅을 사용하여 폼을 구성하는 방법을 설명합니다.

- 폼 컨트롤 연결: register 함수를 사용하여 폼 컨트롤을 react-hook-form에 등록하고, handleSubmit 함수를 사용하여 폼 제출 처리를 구현하는 방법을 보여줍니다.

- 폼 검증: 필수 필드, 최소 길이, 패턴 등의 검증 규칙을 설정하고 에러 메시지를 표시하는 방법을 설명합니다.

- 외부 라이브러리와의 통합: Controller 컴포넌트를 사용하여 react-hook-form과 다른 UI 라이브러리를 쉽게 통합하는 방법을 보여줍니다.


```
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
// LoginForm 컴포넌트 내부






return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>Email</label>
      <input
        type="email"
        {...register("email", { required: "이메일을 입력해주세요.", pattern: { value: /^\S+@\S+$/i, message: "올바른 이메일 형식이 아닙니다." } })}
      />
      {errors.email && <p>{errors.email.message}</p>}
    </div>
    <div>
      <label>Password</label>
      <input
        type="password"
        {...register("password", { required: "비밀번호를 입력해주세요.", minLength: { value: 8, message: "비밀번호는 최소 8자리 이상이어야 합니다." } })}
      />
      {errors.password && <p>{errors.password.message}</p>}
    </div>
    <button type="submit">로그인</button>
  </form>
);

};


```

폼 컨트롤에 register 함수를 사용하여 입력 필드를 React Hook Form에 등록합니다. 각 입력 필드에 대한 검증 규칙도 함께 설정할 수 있습니다.

handleSubmit 함수를 사용하여 폼 제출 처리를 구현합니다. 이 예제에서는 onSubmit 함수에서 폼 데이터를 콘솔에 출력하고 있습니다.


> ### 두 번째로 중요한 API는 Controller 컴포넌트입니다. 이 컴포넌트를 사용하면 React Hook Form과 외부 UI 라이브러리를 쉽게 통합할 수 있습니다

<br>
<br>
<br>

```
const LoginForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: "이메일을 입력해주세요.",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "올바른 이메일 형식이 아닙니다.",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: "비밀번호를 입력해주세요.",
          minLength: {
            value: 8,
            message: "비밀번호는 최소 8자리 이상이어야 합니다.",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        )}
      />
      <button type="submit">로그인</button>
    </form>
  );
};


```

 1) Controller 컴포넌트에 사용된 TextField는 React Hook Form의 input 태그와 유사한 역할을 합니다. 둘 다 사용자 입력을 받아 폼 데이터를 관리하는 데 사용되지만, TextField는 Material-UI 라이브러리의 컴포넌트로 스타일 및 기능이 이미 구현되어 있습니다.

2) Controller를 사용하면 외부 UI 라이브러리와 React Hook Form을 쉽게 통합할 수 있습니다. 이 예제에서는 TextField를 사용하여 머티리얼 디자인 스타일의 입력 필드를 만들었습니다. 이와 같이 Controller를 사용하면 다양한 UI 라이브러리의 컴포넌트를 React Hook Form과 함께 사용할 수 있습니다.

3) input 태그와 비교했을 때 TextField는 다음과 같은 차이점이 있습니다:

    TextField는 Material-UI 라이브러리의 컴포넌트로, 미리 정의된 스타일 및 기능을 제공합니다.
    TextField를 사용하면 폼 요소의 레이아웃 및 디자인을 빠르게 구현할 수 있습니다.
    Controller를 사용하면, TextField와 같은 외부 UI 컴포넌트를 React Hook Form과 연결할 수 있습니다. 이를 통해 외부 라이브러리의 기능 및 스타일을 그대로 사용할 수 있습니다.
    결론적으로, Controller를 사용한 TextField는 input 태그와 유사한 역할을 하지만, 외부 UI 라이브러리와의 통합과 미리 정의된 스타일 및 기능을 제공한다는 차이점이 있습니다. 이를 통해 React Hook Form을 사용하는 동안 여러 UI 라이브러리와 손쉽게 호환할 수 있습니다.






