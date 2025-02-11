import { Meta, StoryFn } from '@storybook/react';
import Icon from '../components/Icon';
import { iconNames } from '../components/IIconTypes';

const iconSizes = [12, 14, 16, 18, 24, 32];

export default {
  title: 'Buttons/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <div
          style={{ fontFamily: 'pretendard, sans-serif', lineHeight: '1.6' }}
        >
          {/* Anatomy Section */}
          <section
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              marginBottom: '20px',
              borderRadius: '8px',
            }}
          >
            <h2 style={{ marginTop: 0 }}>Anatomy</h2>
            <img
              src="/src/assets/anatomy.png"
              alt="아이콘 구조 설명"
              style={{ maxWidth: '100%', marginBottom: '10px' }}
            />
            <ol>
              <li>
                <strong>1. 아이콘 영역:</strong> 버튼의 내용을 나타내는 시각적
                요소입니다.
              </li>
              <li>
                <strong>2. 터치 영역:</strong> 사용자가 클릭하거나 터치할 수
                있는 상호작용 영역입니다.
              </li>
            </ol>
          </section>

          {/* Usage Guidelines Section */}
          <section
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              marginBottom: '20px',
              borderRadius: '8px',
            }}
          >
            <h2 style={{ marginTop: 0 }}>Usage Guidelines</h2>
            <ul>
              <li>
                사용자의 빠른 인지를 돕고, 주요 액션을 직관적으로 안내하는
                역할을 합니다.
              </li>
              <li>
                아이콘은 레이블과 함께 사용할 수 있으며, 레이블 좌측과 우측에
                모두 위치할 수 있습니다.
              </li>
              <li>
                아이콘만 단독으로 사용할 경우, 학습이 필요 없는 보편적인
                아이콘을 선택하여 특정 기능을 명확하게 표현합니다.
              </li>
              <li>배경을 사용하여 접근 가능한 터치 영역을 제공합니다.</li>
            </ul>
          </section>

          {/* Use Case Section */}
          <section
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              marginBottom: '20px',
              borderRadius: '8px',
            }}
          >
            <h2 style={{ marginTop: 0 }}>Use Case</h2>
            <h3>1. Default</h3>

            {/* Do Section */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'green' }}>Do</h4>
                <ul>
                  <li>하단 탭 메뉴의 아이콘 버튼 간 간격은 동일해야 합니다.</li>
                  <li>
                    최소한의 터치 영역(약 44x44px)을 확보하여 접근성을 보장해야
                    합니다.
                  </li>
                </ul>
                <img
                  src="/src/assets/icon-do1.png"
                  alt="Do Example"
                  style={{ width: '100%' }}
                />
              </div>

              {/* Don't Section */}
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'red' }}>Don't</h4>
                <ul>
                  <li>
                    아이콘 버튼이 너무 작거나 클릭 영역이 부족하지 않도록 해야
                    합니다.
                  </li>
                  <li>
                    버튼 간 간격이 일정하지 않거나 불균형하게 배치되지 않도록
                    합니다.
                  </li>
                </ul>
                <img
                  src="/src/assets/icon-dont1.png"
                  alt="Don't Example"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </section>
        </div>
      ),
    },
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: iconNames,
    },
    size: {
      control: { type: 'radio' },
      options: iconSizes,
    },
  },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'badge',
  size: 24,
};
