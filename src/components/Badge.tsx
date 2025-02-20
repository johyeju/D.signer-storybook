import React, { useEffect, useState } from 'react';
import './Badge.css';
import { icons } from './IconTransport';
import Avatar from './Avatar';
import talktalk from '../../public/badge/talktalk.svg';
import { badgeIcons } from './IconBadge';

interface BadgeProps {
  className?: string;
  type?: 'Artery' | 'WideArea' | 'Default' | 'translucent';
  congestion?: 'Default' | 'Usually' | 'crowded' | 'last';
  text: string;
  label?: string;
  num?: number;
  isProfile?: boolean;
  isNpay?: boolean;
  isTalkTalk?: boolean;
  isIcon?: boolean;
  iconName?: keyof typeof icons; // icons에서 가져올 아이콘 키
}

const Badge: React.FC<BadgeProps> = ({
  className = '',
  type = 'Default',
  congestion,
  text,
  label: initialLabel,
  num,
  isProfile = false,
  isNpay = false,
  isTalkTalk = false,
  isIcon = false,
  iconName,
}) => {
  // label 상태를 관리하여 congestion 변경 시 자동 업데이트
  const [label, setLabel] = useState<string | undefined>(initialLabel);

  useEffect(() => {
    if (congestion) {
      const textMap: Record<
        'Default' | 'Usually' | 'crowded' | 'last',
        string
      > = {
        Default: '여유',
        Usually: '보통',
        crowded: '혼잡',
        last: '막',
      };

      setLabel(textMap[congestion]);
    }
  }, [congestion]);

  const selectedIcon = isIcon ? icons[iconName || 'bus'] ?? null : null;

  return (
    <span
      className={`badge ${type ? `badge--${type.toLowerCase()}` : ''} ${
        congestion ? `badge--${congestion.toLowerCase()}` : ''
      } ${className}`.trim()}
      data-story={className}
    >
      {/* 프로필 스토리일 때만 avatar.svg 추가 */}
      {isProfile && <Avatar size="S" />}
      {isNpay && <>{badgeIcons.npay} </>}
      {isTalkTalk && <>{badgeIcons.talktalk} </>}
      {/* isIcon이 true이고 icon 값이 존재하면 버스 SVG 아이콘 표시 */}
      {selectedIcon && <span className="badge-icon">{selectedIcon}</span>}{' '}
      {/* 텍스트박스 */}
      {num && <span className="badge-num">{num}</span>}
      {text && <span className="badge-text">{text}</span>}
      {label && <span className="badge-label">{label}</span>}
    </span>
  );
};

export default Badge;
